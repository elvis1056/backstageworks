/* eslint-disable react/no-multi-comp */
import React, { useState, useEffect } from 'react';
import { BaseModal } from 'components/BaseModal';
import { mergeStyles, PivotItem, Stack } from 'office-ui-fabric-react';
import BaseTab from 'components/BaseTab';
import { DefaultButton } from 'components/BaseButton';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import styles from './ViewModal.module.scss';

function ViewTemplateModal({ isOpen, onClose, viewTemplate }) {
  const { t } = useTranslation();
  const [selectedKey, setSelectedKey] = useState('');
  const [taskRoles, setTaskRoles] = useState([]);
  const [selectedTaskRole, setSelectedTaskRole] = useState();
  const [nfsList, setnfsList] = useState([]);
  const [glusterfsList, setglusterfsList] = useState([]);

  const handleLinkClick = item => {
    setSelectedKey(item.props.itemKey);
  };

  const getPortList = (portList) => {
    if (portList !== undefined) {
      return (
        <div className={`${styles.wrapper__block} ${styles.marginTop10} ${styles.paddingBottom10} ${styles.wrapper__borderBottom}`}>
          <div className={styles.wrapper__block__title}>
            <div className={styles.block__title__20}>{t('portName')}</div>
            <div className={styles.block__title__20}>{t('portNumber')}</div>
          </div>
          {
            portList.map(item => (
              <div className={styles.wrapper__block__item}>
                <div className={styles.block__item__20}>{item.label}</div>
                <div className={styles.block__item__20}>{item.beginAt}</div>
              </div>
            ))
          }
        </div>
      )
    }
  }

  const getNFSList = (nfsList) => {
    if (!isEmpty(nfsList)) {
      return (
        <div className={`${styles.wrapper__block} ${styles.block__borderBottom} ${styles.wrapper__borderBottom} ${styles.marginTop10} ${styles.paddingBottom10}`}>
          <div className={styles.wrapper__block__title}>
            <div className={styles.block__title__25}>{t('NFS')}</div>
            <div className={styles.block__title__25}>{t('mountPoint')}</div>
          </div>
          {
            nfsList.map(item => (
              <div className={styles.wrapper__block__item}>
                <div className={styles.block__item__25}>{item.name}</div>
                <div className={styles.block__item__25}>{item.mountPoint}</div>
              </div>
            ))
          }
        </div>
      )
    }
  }

  const getGlusterfsList = (glusterfsList) => {
    if (!isEmpty(glusterfsList)) {
      return (
        <div className={`${styles.wrapper__block} ${styles.block__borderBottom} ${styles.wrapper__borderBottom} ${styles.marginTop10} ${styles.paddingBottom10}`}>
          <div className={styles.wrapper__block__title}>
            <div className={styles.block__title__25}>{t('glusterfs')}</div>
            <div className={styles.block__title__25}>{t('volumeGlusterFS')}</div>
          </div>
          {
            glusterfsList.map(item => (
              <div className={styles.wrapper__block__item}>
                <div className={styles.block__item__25}>{item.name}</div>
                <div className={styles.block__item__25}>{item.mountPoint}</div>
              </div>
            ))
          }
        </div>
      )
    }
  }

  useEffect(() => {
    if (viewTemplate.jobConfig !== undefined) {
      setTaskRoles(viewTemplate.jobConfig.taskRoles)
      setnfsList(viewTemplate.jobConfig.extras.nfsList)
      setglusterfsList(viewTemplate.jobConfig.extras.glusterfsList)
      setSelectedKey(viewTemplate.jobConfig.taskRoles[0].name)
    }
  }, [viewTemplate])

  useEffect(() => {
    setSelectedTaskRole(taskRoles.find(item => item.name === selectedKey))
  }, [selectedKey])

  return (
    <BaseModal
      isOpen={isOpen}
      styles={{
        main: {
          overflowY: ''
        },
        scrollableContent: {
          overflowY: ''
        }
      }}
      title={viewTemplate.description ? `${t('view')}${t('enSpace')}${t('template')}` : `${t('view')}${t('enSpace')}${t('job')}`}
    >
      <div className={styles.container}>
        {
          viewTemplate.description &&
          <div className={styles.top}>
            <div className={`${styles.top__block} ${styles.top__borderBottom} ${styles.paddingBottom10}`}>
              <div className={styles.top__block__item__title}>
                <div className={styles.top__block__item__25}>{t('Creator')}</div>
                <div className={styles.top__block__item__25}>{t('description')}</div>
              </div>
              <div className={styles.top__block__item}>
                <div className={styles.top__block__item__25}>{viewTemplate.owner}</div>
                <div className={styles.top__block__item__25}>{viewTemplate.description}</div>
              </div>
            </div>
          </div>
        }

        <div
          className={styles.wrapper}
          style={viewTemplate.description === null ? { position: 'absolute', top: '0' } : {}}
        >

          <div className={`${styles.wrapper__block} ${styles.block__borderBottom} ${styles.wrapper__borderBottom} ${styles.marginTop10} ${styles.paddingBottom10}`}>
            <div className={styles.wrapper__block__title}>
              <div className={styles.block__title__25}>{t('virtualCluster')}</div>
              <div className={styles.block__title__25}>{t('GPU')}</div>
              <div className={styles.block__title__25}>{t('retryCount')}</div>
            </div>
            <div className={styles.wrapper__block__item}>
              <div className={styles.block__item__25}>{viewTemplate.jobConfig !== undefined ? viewTemplate.jobConfig.extras.virtualGroup : '-'}</div>
              <div className={styles.block__item__25}>{viewTemplate.jobConfig !== undefined ? viewTemplate.jobConfig.gpuType : '-'}</div>
              <div className={styles.block__item__25}>{viewTemplate.jobConfig !== undefined ? viewTemplate.jobConfig.retryCount : '-'}</div>
            </div>
          </div>

          {
            selectedTaskRole !== undefined
            && getNFSList(nfsList)
          }

          {
            selectedTaskRole !== undefined
            && getGlusterfsList(glusterfsList)
          }

          <div className={`${styles.wrapper__block} ${styles.block__borderBottom} ${styles.wrapper__borderBottom} ${styles.marginTop10} ${styles.paddingBottom10}`}>
            <div className={styles.wrapper__block__title}>
              <div className={styles.block__title__25}>{t('keyword')}</div>
              <div className={styles.block__title__25}>{t('Value')}</div>
            </div>
            <div className={styles.wrapper__block__item}>
              <div className={styles.block__item__25}>
                {
                  selectedTaskRole !== undefined && viewTemplate.jobConfig !== undefined
                    ? '-'
                    : Object.keys(viewTemplate.jobConfig.jobEnvs)[0]
                }
              </div>
              <div className={styles.block__item__25}>
                {
                  selectedTaskRole !== undefined && viewTemplate.jobConfig !== undefined
                    ? '-'
                    : Object.values(viewTemplate.jobConfig.jobEnvs)[0]
                }
              </div>
            </div>
          </div>

          <BaseTab
            onLinkClick={handleLinkClick}
            withBorder={false}
          >
            {
              taskRoles.map(item => (
                <PivotItem
                  headerText={item.name}
                  itemKey={item.name}
                  key={item.name}
                />
              ))
            }
          </BaseTab>

          <div className={`${styles.wrapper__block} ${styles.marginTop10} ${styles.paddingBottom10} ${styles.wrapper__borderBottom}`}>
            <div className={styles.wrapper__block__title}>
              <div className={styles.block__title__25}>{t('command')}</div>
            </div>
            <div className={styles.wrapper__block__command}>
              {
                selectedTaskRole !== undefined && selectedTaskRole.command.split('\n').map(element => (
                  <div>{element}</div>
                ))
              }
            </div>
          </div>

          <div className={`${styles.wrapper__block} ${styles.marginTop10} ${styles.paddingBottom10} ${styles.wrapper__borderBottom}`}>
            <div className={styles.wrapper__block__title}>
              <div className={styles.block__title__20}>{t('taskInstance')}</div>
              <div className={styles.block__title__50}>{t('dockerMirrors')}</div>
            </div>
            <div className={styles.wrapper__block__item}>
              <div className={styles.block__item__20}>{selectedTaskRole !== undefined && selectedTaskRole.taskNumber}</div>
              {
                selectedTaskRole !== undefined
                  && selectedTaskRole.dockerImage
                  && selectedTaskRole.dockerImage.uri
              }
            </div>
          </div>

          <div className={`${styles.wrapper__block} ${styles.marginTop10} ${styles.paddingBottom10} ${styles.wrapper__borderBottom}`}>
            <div className={styles.wrapper__block__title}>
              <div className={styles.block__title__20}>{t('CPU')}</div>
              <div className={styles.block__title__20}>{t('memory')} (MB)</div>
              <div className={styles.block__title__20}>{t('sharedMemoryMB')}</div>
              <div className={styles.block__title__20}>{t('disk')}</div>
              <div className={styles.block__title__20}>{t('GPU')}</div>
            </div>
            <div className={styles.wrapper__block__item}>
              <div className={styles.block__item__20}>{selectedTaskRole !== undefined && selectedTaskRole.cpuNumber}</div>
              <div className={styles.block__item__20}>{selectedTaskRole !== undefined && selectedTaskRole.memoryMB}</div>
              <div className={styles.block__item__20}>{selectedTaskRole !== undefined && selectedTaskRole.shmMB}</div>
              <div className={styles.block__item__20}>{selectedTaskRole !== undefined && selectedTaskRole.storageGB}</div>
              <div className={styles.block__item__20}>{selectedTaskRole !== undefined && selectedTaskRole.gpuNumber}</div>
            </div>
          </div>

          {
            selectedTaskRole !== undefined
            && selectedTaskRole.portList !== undefined
            && getPortList(selectedTaskRole.portList)
          }

          <div className={`${styles.wrapper__block} ${styles.marginTop10} ${styles.paddingBottom10} ${styles.wrapper__borderBottom}`}>
            <div className={styles.wrapper__block__title}>
              <div className={styles.block__title__50}>{t('conditionsOfCompletion')}: {t('minimumCountOfFailedInstances')}</div>
              <div className={styles.block__title__50}>{t('conditionsOfCompletion')}: {t('minimumCountOfSuccessfulInstances')}</div>
            </div>
            <div className={styles.wrapper__block__item}>
              <div className={styles.block__item__50}>{selectedTaskRole !== undefined && selectedTaskRole.minFailedTaskCount}</div>
              <div className={styles.block__item__50}>{selectedTaskRole !== undefined && selectedTaskRole.minSucceededTaskCount}</div>
            </div>
          </div>

        </div>
      </div>

      <Stack
        horizontal
        horizontalAlign="flex-end"
      >
        <DefaultButton
          className={mergeStyles({ marginRight: 10 })}
          onClick={() => {
            onClose()
            setSelectedKey('')
          }}
          text={t('close')}
        />
      </Stack>
    </BaseModal>
  );
}

ViewTemplateModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  viewTemplate: PropTypes.object
};

export default ViewTemplateModal;
