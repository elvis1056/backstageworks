import React, { useEffect, useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import { mergeStyles, DefaultButton, DirectionalHint } from 'office-ui-fabric-react';
import { TextField } from '../Form'
import { debounce, isEmpty } from 'lodash';
import { getHaborRepoInfo, getHaborRepoTags } from 'utils/api';
import { DockerInfo as DockerInfoConstructor } from 'views/Schedule/components/models/docker-info';

const DockerInfo = ({ data, onChange }) => {
  const { t } = useTranslation();
  const [repositories, setRepositories] = useState([]);
  const [originRepositories, setOriginRepositories] = useState();
  const [harborHost, setHarborHost] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const infoChange = useRef('');

  const onInfoChange = useCallback((field, value) => {
    const newData = new DockerInfoConstructor({ ...data, [field]: value });
    onChange('dockerInfo', newData)
  }, [onChange])

  useEffect(() => {
    infoChange.current = onInfoChange;
  }, [onInfoChange]);

  const checkTag = async (tag, repositories) => {
    try {
      const tagsData = await getHaborRepoTags(repositories)
      if (tag === undefined) {
        return ''
      } else if (tag === '') {
        return `${t('tag')}${t('enSpace')}${t('error')}`
      } else {
        return tagsData.find(data => data.tag === tag) ? '' : t('dockerMirrorsPathError')
      }
    } catch {
      return t('dockerMirrorsPathError');
    }
  }

  const checkUri = useCallback(
    debounce(
      async (uri, harborHost, originRepositories) => {
        if (isEmpty(uri)) {
          setErrorMsg(t('dockerMirrorsPathCannotBeEmpty'));
        } else {
          const Uri = uri.split('/');
          if (Uri.length !== 3) {
            return setErrorMsg('');
          }

          if (Uri[0] !== harborHost) {
            return setErrorMsg('');
          }

          const repositoryNotWithTag = Uri[2].split(':')[0];
          const repositoryHasTag = Uri[2].split(':')[1];
          const myRepository = Uri[1] + '/' + repositoryNotWithTag;

          const findRepositories = originRepositories.find(item => item === myRepository);

          if (!findRepositories) {
            return setErrorMsg(t('dockerMirrorsPathError')); // 'error repositories or tag'
          }

          try {
            const isCorrectTag = await checkTag(repositoryHasTag, findRepositories);
            setErrorMsg(isCorrectTag);
          } catch {
            setErrorMsg('');
          }
        }
      }, 200)
    , [setErrorMsg])

  useEffect(() => {
    getHaborRepoInfo()
      .then(res => {
        setHarborHost(res.host);
        setOriginRepositories(res.repositories)
        setRepositories(
          res.repositories.map(repository => {
            const item = {};
            item.key = repository;
            item.text = repository;
            item.componentRef = ref => (item.data = { ref: ref });
            return item;
          })
        );
      })
  }, [])

  const _onItemClick = useCallback((ev, item) => {
    ev.preventDefault();

    getHaborRepoTags(item.text, false).then(tags => {
      item.subMenuProps = {
        items: tags.map(tag => ({
          key: tag,
          text: tag,
          onClick: (tagEv, tagItem) => {
            infoChange.current('uri', `${harborHost}/${item.text}:${tagItem.text}`);
            setErrorMsg('')
          }
        }))
      };
      item.data.ref.openSubMenu();
    });
  }, [harborHost]);

  return (
    <div>
      <div className={styles.formContent}>
        <TextField
          className={mergeStyles({ width: '100%', position: 'relative' })}
          customButton={(
            <DefaultButton
              menuProps={{
                directionalHint: DirectionalHint.rightCenterEdge,
                items: repositories,
                onItemClick: _onItemClick
              }}
              styles={{
                root: {
                  background: '#fff',
                  padding: 0,
                  width: 30,
                  minWidth: 30,
                  height: 20,
                  position: 'absolute',
                  right: 10,
                  top: 5
                },
                rootHovered: {
                  background: '#fff'
                }
              }}
            />
          )}
          // ? t('dockerMirrorsPathCannotBeEmpty') : null
          errorMessage={checkUri(data.uri, harborHost, originRepositories) ? errorMsg : ''}
          onChange={(e, text) => {
            checkUri(text, harborHost, originRepositories)
            onInfoChange('uri', text)
          }}
          placeholder={t('pleaseEnterDockerMirrorsPath')}
          title={t('dockerMirrors')}
          value={data.uri}
        />
      </div>
    </div>
  );
};

DockerInfo.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func
};

export default DockerInfo;