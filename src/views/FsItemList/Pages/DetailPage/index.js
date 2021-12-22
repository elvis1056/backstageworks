import React, { useState, useEffect, useCallback, useContext, useRef } from 'react';
import { Link, useParams, useHistory, useLocation } from 'react-router-dom';

import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PrimaryButton, DefaultButton, SplitButton } from 'components/BaseButton';
import ConfirmModal from 'components/ConfirmModal';
import MonacoPanel from 'components/monaco/monaco-panel';
import TopBar from './components/TopBar';
import BasePaper from 'components/BaseMuiPaper';
import LoadingDialog from 'components/LoadingDialog';
import NewFolderModal from './components/NewFolderModal';
import UploadModal from './components/UploadModal';
import PreviewImageModal from './components/PreviewImageModal';
import RenameModal from './components/RenameModal';
import DirectoryModal from './components/DirectoryModal';
import UploadRepository from './components/UploadRepository';

import Ordering from './utils/Ordering';
import Filter from './utils/Filter';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { theme } from 'theme';

import Context from '../../Context';
import GlobalContext from 'layouts/Main/GlobalContext'

import {
  getNfsFilePath, getGlusterfsFilePath, getXdfsFilePath,
  downloadNfsFile, downloadGlusterfsFile, downloadXdfsFile,
  uploadNfsFile, uploadGlusterfsFile, uploadXdfsFile,
  copyNfsFile, copyGlusterfsFile, copyXdfsFile,
  deleteNfsFile, deleteGlusterfsFile, deleteXdfsFile,
  unZipNfsFile, unZipGlusterFile, unZipXdfsFile
} from 'utils/api';
import { formatBytes, checkUrlIsImage } from 'utils';
import { generateNewFileName } from './utils'

import style from './index.module.scss';

import { fakeFileList } from './fakeData';

const canUnzip = path => {
  return (
    path.endsWith('.tar.gz') ||
    path.endsWith('.tgz') ||
    path.endsWith('.tar.bz2') ||
    path.endsWith('.tar') ||
    path.endsWith('.zip')
  );
};

const isXtar = path => {
  return (
    path.includes('application/x-tar')
  )
}

const DetailPage = ({ match }) => {
  const { t } = useTranslation();
  const { path } = useParams();
  const history = useHistory();
  const location = useLocation();
  const { isNFS, fsList, pathTemp, setPathTemp, isXdfsEnabled } = useContext(Context);
  const { userInfo } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [filter, setFilter] = useState(new Filter());
  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadModalMode, setUploadModalMode] = useState(0);
  const [selectionDetail, setSelectionDetail] = useState([]);
  const [isWritable, setIsWritable] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [ordering, setOrdering] = useState(new Ordering());

  const [isDownloading, setIsDownloading] = useState(false);
  const [isLoadingImg, setIsLoadingImg] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const [imgName, setImgName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imgUrlCache, setImgUrlCache] = useState({});
  const [editorContent, setEditorContent] = useState('');
  const [currentFileInfo, setCurrentFileInfo] = useState({});
  const monaco = useRef(null);

  // columns id action state

  const [selectedItem, setSelectedItem] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUnzipModal, setShowUnzipModal] = useState(false);
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [isDirectoryModalOpen, setIsDirectoryModalOpen] = useState(false);
  const [isUploadRepositoryModalOpen, setIsUploadRepositoryModalOpen] = useState(false);

  const _closeEditor = () => {
    setIsEditorOpen(false);

    // Change to the default theme
    monaco.current.editor.setTheme('vs');
  };

  const handleFileSave = () => {
    setIsUploading(true);
    const blob = new Blob([editorContent], {
      type : 'text/plain'
    });
    const file = new File([blob], currentFileInfo.name, { type: 'text/plain' })
    const formData = new FormData();
    let pathUrl = location.pathname.split(`/fs-item-list/${path}`)[1]
    pathUrl = pathUrl ? pathUrl : '/'
    formData.append('files', file)
    const uploadFile = isXdfsEnabled ? uploadXdfsFile : (isNFS ? uploadNfsFile : uploadGlusterfsFile);
    uploadFile(path, pathUrl, formData)
      .then(() => {
        setIsEditorOpen(false);
      })
      .catch(err => toast.error(err.data ? err.data.message : err.message))
      .finally(() => setIsUploading(false))
  }

  const unZip = () => {
    setIsLoading(true);
    const fsItemNodePath = selectedItem.path;
    const unZipFile = isXdfsEnabled ? unZipXdfsFile : (isNFS ? unZipNfsFile : unZipGlusterFile);
    unZipFile(path, fsItemNodePath)
      .then(() => {
        getFileList();
      })
      .catch(err => toast.error(err.data.message))
      .finally(() => setIsLoading(false))
  };

  const onDelete = () => {
    const fsItemNodePath = selectedItem.path;
    const { name } = selectedItem
    const deleteFile = isXdfsEnabled ? deleteXdfsFile : (isNFS ? deleteNfsFile : deleteGlusterfsFile);

    toast.success(`${t('delete')}${t('enSpace')}${t('success')} - ${name}`)
    const close = true;
    if (close) return

    deleteFile(path, fsItemNodePath)
      .then(() => {
        toast.success(`${t('delete')}${t('enSpace')}${t('success')}`);
        setFileList(data => data.filter(item => item.name !== name));
      })
      .catch(err => toast.error(err.data.message));
  };

  const applySortProps = column => {
    column.isSorted = ordering.field === column.id;
    column.isSortedDescending = ordering.descending;
    column.onColumnClick = (event, column) => {
      const { field, descending } = ordering;
      if (field === column) {
        if (descending) {
          setOrdering(new Ordering());
        } else {
          setOrdering(new Ordering(field, true));
        }
      } else {
        setOrdering(new Ordering(column));
      }
    }
    return column;
  }

  let urlPath = location.pathname.split(`/${isXdfsEnabled ? 'xdfs-item-list' : isNFS ? 'fs-item-list' : 'glusterfs-item-list'}/${path}`)[1]
  urlPath = urlPath ? urlPath : '/'

  const getFileList = useCallback(() => {
    const name = path.includes('/') ? path.split('/')[0] : path;
    const filePath = location.pathname.substring(`/${isXdfsEnabled ? 'xdfs-item-list' : isNFS ? 'fs-item-list' : 'glusterfs-item-list'}/${name}`.length + 1)

    // setIsLoading(true);
    const getFilePath = isXdfsEnabled
      ? getXdfsFilePath
      : isNFS ? getNfsFilePath : getGlusterfsFilePath

    setFileList(fakeFileList.children)
    if (pathTemp) {
      setPathTemp(null);
    }

    const close = true

    if (close) return

    getFilePath(name, filePath)
      .then(data => {
        setFileList(data.children)
        if (pathTemp) {
          setPathTemp(null);
        }
      })
      .catch(err => {
        if (err.data && err.data.code === 'ForbiddenUserError')
          history.push('/not-found')

        toast.error(err.data ? err.data.message : err.message)
      })
      .finally(() => setIsLoading(false))
  }, [path, location.pathname])

  useEffect(() => {
    const name = path.includes('/') ? path.split('/')[0] : path;
    if (!userInfo.username) return;

    setIsWritable(() => {
      const find = fsList.find(item => item.name === name)
      if(!find) return false;

      return find.publicMode === 2 ||
        find.canWriteUsers.some(user => user === userInfo.username) ||
        find.users.some(user => user === userInfo.username)
    })
  }, [fsList, userInfo])

  useEffect(() => {
    getFileList()
  }, [location.pathname])

  const renderPath = () => {
    const fullLink = urlPath.split('/').slice(1).reduce((acc, curr) => [...acc, `${acc}/${curr}`], [])

    return urlPath.split('/').slice(1).map((subPath, idx) => {
      return location.pathname === `${match.url}${fullLink[idx]}` ?
        <a
          className={style.linkStyle}
          key={idx}
          onClick={e => e.preventDefault}
        >
          /{subPath}
        </a>
        :
        <Link
          className={style.linkStyle}
          key={idx}
          to={`${match.url}${fullLink[idx]}`}
        >
          /{subPath}
        </Link>
    })
  }

  return (
    <>
      <p className={style.breadcrumb}>
        {
          location.pathname === `/${isXdfsEnabled ? 'xdfs-item-list' : (isNFS ? 'fs-item-list' : 'glusterfs-item-list')}/${path}`
            ?
            <a
              className={style.linkStyle}
              onClick={e => e.preventDefault}
            >
              {path}
            </a>
            :
            <Link
              className={style.linkStyle}
              to={`/${isXdfsEnabled ? 'xdfs-item-list' : (isNFS ? 'fs-item-list' : 'glusterfs-item-list')}/${path}`}
            >
              {path}
            </Link>
        }
        {renderPath()}
      </p>
      <TopBar
        filter={filter}
        getFileList={getFileList}
        isLoading={isLoading}
        isWritable={isWritable}
        nfsName={path}
        selectionDetail={selectionDetail}
        setFileList={setFileList}
        setFilter={setFilter}
        setIsFolderModalOpen={setIsFolderModalOpen}
        setIsLoading={setIsLoading}
        setIsUploadModalOpen={setIsUploadModalOpen}
        setSelectionDetail={setSelectionDetail}
        setUploadModalMode={setUploadModalMode}
      />
      <div className={style.wrapper}>
        <BasePaper
          columns={[
            applySortProps({
              id: 'name',
              key: 'name',
              label: t('name'),
              onTableCellRender: (fsItemNode) => {
                const fsItemNodePath = fsItemNode.path;
                const { name, type, mime } = fsItemNode;
                const downloadFile = isXdfsEnabled
                  ? downloadXdfsFile
                  : isNFS ? downloadNfsFile : downloadGlusterfsFile

                const generateColor = (mime) => {
                  const mimeType = mime.split(';')[0]
                  if (mimeType.includes('inode/directory')) {
                    return '#006eb8'
                  } else if (mimeType.includes('application/x-tar') || mimeType.includes('application/zip') || mimeType.includes('vnd.debian.binary-package')) {
                    return '#de372b'
                  } else if (mimeType.includes('application/x-sh')) {
                    return '#39b54a'
                  } else if (mimeType.includes('audio')) {
                    return '#2cb5e9'
                  } else if (mimeType.includes('image')) {
                    return '#762671'
                  } else if (mimeType.includes('text')) {
                    return theme.themePrimary
                  } else {
                    return '#333333'
                  }
                }

                /**
                 * @param {React.MouseEvent} event
                 */
                function onClickFile(event) {
                  event.stopPropagation();
                  if (checkUrlIsImage(name)) {
                    handlePreview();
                    return;
                  }
                  if (!mime.includes('text')) {
                    return;
                  }

                  // TODOS: check file can edit
                  setIsDownloading(true);
                  downloadFile(path, fsItemNodePath)
                    .then(res => {
                      const reader = new FileReader();
                      reader.onload = () => {
                        setEditorContent(reader.result)
                      }
                      reader.readAsText(new Blob([res]))
                      setIsEditorOpen(true);
                      setCurrentFileInfo({ fsItemNodePath, name })
                    })
                    .finally(() => setIsDownloading(false));

                  return;
                }

                /**
                 * @param {React.MouseEvent} event
                 */
                function onClickDir(event) {
                  event.stopPropagation();
                  const destination = history.location.pathname;

                  history.push(`${destination}/${name}`);
                }

                // Unregistered case
                if (['file', 'directory', 'link'].indexOf(type) < 0) {
                  return (null);
                }

                const handleClick = (type === 'file')
                  ? onClickFile
                  : (type === 'link') ? onClickFile : onClickDir;

                const showIcon = (type) => {
                  const style = { marginRight: 10 }
                  const customImgStyle = { marginRight: 10, width: '1.5rem', height: '1.5rem' }
                  if (type === 'file') {
                    return (<Icon style={style}>description</Icon>)
                  } else if (type === 'folder') {
                    return (<Icon style={style}>folder</Icon>)
                  } else if (type === 'link') {
                    return (
                      <img
                        src="/assets/img/file_shortcut.svg"
                        style={customImgStyle}
                      />
                    )
                  } else {
                    return
                  }
                }

                // TODO: check file can edit
                const buttonStyle = {
                  display: 'flex',
                  alignItems: 'center',
                  color: generateColor(mime)
                };

                const handlePreview = () => {
                  if (imgUrlCache[name]) {
                    setImgUrl(imgUrlCache[name])
                    setImgName(name)
                  } else {
                    setIsLoadingImg(true)
                    downloadFile(path, fsItemNodePath)
                      .then(data => {
                        const url = window.URL.createObjectURL(data)
                        setImgUrl(url)
                        setImgName(name)
                        setImgUrlCache(prev => ({ ...prev, [name]: url }))
                      })
                      .catch(err => toast.error(err?.data ? err?.data?.message : err?.message))
                      .finally(() => setIsLoadingImg(false))
                  }

                  setIsPreviewModalOpen(true)
                }

                // TODO: https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
                // #006eb8 Blue Directory
                // #39b54a Green Executable or recognized data file
                // #2cb5e9 Cyan Symbolic link file / Audio File
                // #ffc706 Yellow Device
                // #762671 Magenta Graphic image file
                // #de372b Red Archive file

                return (
                  <Link
                    href={null}
                    onClick={handleClick}
                    style={buttonStyle}
                    to={'/fs-item-list'}
                  >
                    {showIcon(type)}
                    {name}
                  </Link>
                );
              }
            }),
            applySortProps({
              id: 'size',
              key: 'size',
              label: `${t('size')}`,
              onTableCellRender: (fsItemNode) => formatBytes(fsItemNode.size)
            }),
            {
              id: 'action',
              key: 'action',
              label: t('Operations'),
              onTableCellRender: (fsItemNode) => {
                const fsItemNodePath = fsItemNode.path;
                const { type, name, mime } = fsItemNode;
                const isDownloadable = type === 'file';
                const isLink = type === 'link';
                const downloadFileReq = isXdfsEnabled
                  ? downloadXdfsFile
                  : isNFS ? downloadNfsFile : downloadGlusterfsFile

                const downloadFile = () => {
                  setIsDownloading(true)
                  downloadFileReq(path, fsItemNodePath)
                    .then(res => {
                      const newLink = document.createElement('a');
                      const url = window.URL.createObjectURL(new Blob([res]));
                      newLink.href = url;
                      newLink.download = name;
                      newLink.click();
                      window.URL.revokeObjectURL(url);
                    })
                    .catch(err => toast.error('Error:' + err.data ? err.data.message : err.message))
                    .finally(() => setIsDownloading(false));
                }

                const editFile = (fsItemNode) => {
                  const { name } = fsItemNode;

                  toast.success(`${t('edit')}${t('enSpace')}${t('success')} - ${name}`)
                  const close = true;
                  if (close) return

                  setIsDownloading(true)
                  downloadFileReq(path, fsItemNodePath)
                    .then(res => {
                      const reader = new FileReader();
                      reader.onload = () => {
                        setEditorContent(reader.result)
                      }
                      reader.readAsText(new Blob([res]))
                      setIsEditorOpen(true);
                      setCurrentFileInfo({ fsItemNodePath, name })
                    })
                    .catch(err => toast.error('Error:' + err.data ? err.data.message : err.message))
                    .finally(() => setIsDownloading(false));
                }

                const deleteFile = () => {
                  setSelectedItem(fsItemNode);
                  setShowDeleteModal(true);
                }

                const unZipFile = () => {
                  setSelectedItem(fsItemNode);
                  setShowUnzipModal(true);
                }

                const copyFile = () => {

                  toast.success(`${t('clone')}${t('enSpace')}${t('success')}`)
                  const close = true;
                  if (close) return

                  setIsDownloading(true)
                  const newFileName = generateNewFileName(fsItemNodePath, fileList, type)
                  const copyFileReq = isXdfsEnabled ? copyXdfsFile : (isNFS ? copyNfsFile : copyGlusterfsFile);

                  copyFileReq(path, fsItemNodePath, { targetPath: newFileName })
                    .then(() => {
                      getFileList();
                      toast.success(`${t('clone')}${t('enSpace')}${t('success')}`)
                    })
                    .catch(err => toast.error(err.data ? err.data.message : err.message))
                    .finally(() => setIsDownloading(false));
                }

                return (
                  isDownloading
                    ? <CircularProgress />
                    :
                    <>
                      {
                        isWritable ?
                          <SplitButton
                            disabled={!isDownloadable}
                            onClick={() => {
                              toast.success(`${t('download')}${t('enSpace')}${t('success')}`);
                              const downloadOK = false;
                              if (downloadOK) {
                                downloadFile()
                                return
                              }
                            }}
                            options={[
                              {
                                id: 'rename',
                                label: t('rename'),
                                handleItemclick: () => {
                                  setSelectedItem(fsItemNode);
                                  setIsRenameModalOpen(true);
                                },
                                style: isLink ? { display: 'none' } : {},
                                icon: <Icon style={{ marginRight: '10px' }}>auto_fix_high</Icon>
                              },
                              {
                                id: 'move',
                                label: t('move'),
                                handleItemclick: () => {
                                  setSelectedItem(fsItemNode)
                                  setIsDirectoryModalOpen(true)
                                },
                                style: isLink ? { display: 'none' } : {},
                                icon: <Icon style={{ marginRight: '10px' }}>drive_file_move</Icon>
                              },
                              {
                                id: 'copy',
                                label: t('clone'),
                                handleItemclick: copyFile,
                                style: isLink ? { display: 'none' } : {},
                                icon: <Icon style={{ marginRight: '10px' }}>content_copy</Icon>
                              },
                              {
                                id: 'edit',
                                label: t('edit'),
                                disabled: !isDownloadable,
                                handleItemclick: () => editFile(fsItemNode),
                                style: !isDownloadable ? { display: 'none' } : {},
                                icon: <Icon style={{ marginRight: '10px' }}>edit</Icon>
                              },
                              {
                                disabled: !isXtar(mime),
                                id: 'UploadRepositories',
                                label: t('UploadRepositories'),
                                handleItemclick: () => {
                                  setSelectedItem(fsItemNode)
                                  setIsUploadRepositoryModalOpen(true)
                                },
                                style: !isXtar(mime) ? { display: 'none' } : {},
                                icon: <Icon style={{ marginRight: '10px' }}>publish</Icon>
                              },
                              {
                                id: 'delete',
                                label: t('delete'),
                                iconProps: { iconName: 'Delete', styles: { root: { color: '#333333' } } },
                                icon: <Icon style={{ marginRight: '10px' }}>delete</Icon>,
                                handleItemclick: deleteFile
                              },
                              {
                                disabled: !canUnzip(name),
                                id: 'unzip',
                                label: t('unzip'),
                                iconProps: { iconName: 'ZipFolder', styles: { root: { color: '#333333' } } },
                                handleItemclick: unZipFile,
                                style: !canUnzip(name) ? { display: 'none' } : {},
                                icon: <Icon style={{ marginRight: '10px' }}>outbox</Icon>
                              }
                            ]}
                            split
                            startIcon={<Icon>file_download</Icon>}
                            text={t('download')}
                          />
                          :
                          <DefaultButton
                            children={t('download')}
                            disabled={!isDownloadable}
                            onClick={downloadFile}
                            startIcon={<Icon>file_download</Icon>}
                          />
                      }
                    </>
                )
              }
            }
          ]}
          itemChecked
          itemCheckedAllChange={(e, checked, rows) => {
            if (checked) {
              setSelectionDetail(rows)
            } else {
              setSelectionDetail([])
            }
          }}
          itemCheckedChange={(e, checked, row) => {
            if (checked) {
              setSelectionDetail(prev => ([...prev, row]))
            } else {
              setSelectionDetail(prev => ([...prev].filter(selected => selected.name !== row.name)))
            }
          }}
          itemCheckedData={selectionDetail}
          labelRowsPerPage={t('labelRowsPerPage')}
          ordering={ordering}
          page={page}
          rows={filter.apply(ordering.apply(fileList))}
          rowsPerPage={rowsPerPage}
          selectionMode={0}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
        />
      </div>
      {
        isFolderModalOpen &&
        <NewFolderModal
          fileList={fileList}
          isOpen={isFolderModalOpen}
          nfsName={path}
          onClose={() => setIsFolderModalOpen(false)}
          setFileList={setFileList}
        />
      }

      {
        isUploadModalOpen &&
        <UploadModal
          getFileList={getFileList}
          isOpen={isUploadModalOpen}
          mode={uploadModalMode}
          nfsName={path}
          onClose={() => setIsUploadModalOpen(false)}
          setFileList={setFileList}
        />
      }

      {
        isEditorOpen &&
        <MonacoPanel
          footer={
            isWritable &&
            <PrimaryButton
              children={t('save')}
              disabled={isUploading}
              onClick={handleFileSave}
            />
          }
          isOpen={isEditorOpen}
          monacoProps={{
            language: 'markdown',
            options: { wordWrap: 'on', readOnly: false },
            value: editorContent,
            onChange(text) {
              setEditorContent(text);
            }
          }}
          monacoRef={monaco}
          onDismiss={_closeEditor}
          title="File Editor"
        />
      }

      {
        isPreviewModalOpen &&
        <PreviewImageModal
          isLoading={isLoadingImg}
          isOpen={isPreviewModalOpen}
          name={imgName}
          onClose={() => setIsPreviewModalOpen(false)}
          url={imgUrl}
        />
      }
      {
        showUnzipModal &&
        <ConfirmModal
          confrimText={t('unzip')}
          content={t('unzipWillOverwriteFile')}
          isOpen={showUnzipModal}
          onClose={() => setShowUnzipModal(false)}
          onConfirm={unZip}
          title={t('unzip')}
        />
      }
      {
        isRenameModalOpen &&
        <RenameModal
          fileList={fileList}
          getFileList={getFileList}
          isOpen={isRenameModalOpen}
          nfsName={path}
          onClose={() => setIsRenameModalOpen(false)}
          selectedItem={selectedItem}
        />
      }
      <DirectoryModal
        fileList={fileList}
        getFileList={getFileList}
        isOpen={isDirectoryModalOpen}
        nfsName={path}
        onClose={() => setIsDirectoryModalOpen(false)}
        selectedItem={selectedItem}
      />
      {
        isUploadRepositoryModalOpen &&
        <UploadRepository
          isOpen={isUploadRepositoryModalOpen}
          nfsName={path}
          onClose={() => {
            setIsUploadRepositoryModalOpen(false)
          }}
          selectedItem={selectedItem}
        />
      }

      {
        showDeleteModal &&
        <ConfirmModal
          confrimText={t('delete')}
          content={t('sureDelete', { name: selectedItem.name })}
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={onDelete}
          title={`${t('delete')}${t('enSpace')}${t('file')}`}
        />
      }

      <LoadingDialog
        isOpen={isDownloading}
        subText={t('wait')}
        title={'Loading'}
      />

    </>
  )
}

DetailPage.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object
}


export default DetailPage