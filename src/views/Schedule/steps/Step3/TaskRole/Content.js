import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import { TextField, SpinButton, CommandInput } from '../Form';
// import { mergeStyles } from 'office-ui-fabric-react';
import DockerInfo from './DockerInfo';
import AdvancedSetting from './AdvancedSetting';

const Content = ({ selectedIdx, checkDupName, jobTaskRoles, setJobTaskRoles }) => {

  const { t } = useTranslation();
  const currentTaskRole = jobTaskRoles ? jobTaskRoles[selectedIdx] : {};

  const contentOnChange = useCallback((field, value) => {
    setJobTaskRoles(prev => {
      const res = [...prev]
      res[selectedIdx] = { ...res[selectedIdx], [field]: value };
      return res
    })
  }, [selectedIdx])

  const onSizeChange = (field, value) => {
    contentOnChange('containerSize', { ...currentTaskRole.containerSize, [field]: value })
  }

  return (
    <>
      <div
        className={styles.formContent}
        style={{ marginTop: '10px' }}
      >
        <div className={styles.paddingLeftRight10}>
          <TextField
            errorMessage={checkDupName()}
            // hint={t('toolTipsTaskRoleName')}
            onChange={(e, text) => {
              contentOnChange('name', text)
            }}
            title={t('taskRoleName')}
            value={currentTaskRole.name}
          />
          {/* <div className={`${styles.width50} ${styles.paddingLeftRight10}`}>
            <SpinButton
              min={0}
              onChange={value => contentOnChange('taskRetryCount', value)}
              title={`${t('retryCount')}(${t('optional')})`}
              value={currentTaskRole.taskRetryCount}
            />
          </div> */}
        </div>

        <div className={styles.paddingLeftRight10}>
          <CommandInput
            hint={t('toolTipsCommandSection')}
            onChange={t => {
              contentOnChange('commands', t)
            }}
            title={t('command')}
            value={currentTaskRole.commands}
          />
        </div>

        <div className={styles.row}>
          {/* <div className={`${styles.width25} ${styles.paddingLeftRight10}`}>
            <SpinButton
              min={1}
              onChange={value => contentOnChange('instances', value)}
              title={t('taskInstance')}
              value={currentTaskRole.instances}
            />
          </div> */}
          <div className={`${styles.width25} ${styles.paddingLeftRight10}`}>
            <SpinButton
              min={1}
              onChange={value => onSizeChange('cpu', value)}
              title={t('CPU')}
              value={currentTaskRole.containerSize.cpu}
            />
          </div>
          <div className={`${styles.width25} ${styles.paddingLeftRight10}`}>
            <SpinButton
              min={0}
              onChange={value => onSizeChange('gpu', value)}
              title={t('GPU')}
              value={currentTaskRole.containerSize.gpu}
            />
          </div>
          <div className={`${styles.width25} ${styles.paddingLeftRight10}`}>
            <SpinButton
              min={512}
              onChange={value => onSizeChange('memoryMB', value)}
              title={`${t('memory')} (MB)`}
              value={currentTaskRole.containerSize.memoryMB}
            />
          </div>
          <div className={`${styles.width25} ${styles.paddingLeftRight10}`}>
            <SpinButton
              errorMessage={
                (currentTaskRole.shmMB > currentTaskRole.containerSize.memoryMB)
                  ? t('shmCantGreaterThanMemory')
                  : ''
              }
              min={0}
              onChange={value => contentOnChange('shmMB', value)}
              title={t('sharedMemoryMB')}
              value={currentTaskRole.shmMB}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.width25} ${styles.paddingLeftRight10}`}>
            <SpinButton
              min={1}
              onChange={value => onSizeChange('storageGB', value)}
              title={`${t('disk')} (GB)`}
              value={currentTaskRole.containerSize.storageGB}
            />
          </div>
          <div className={`${styles.width75} ${styles.paddingLeftRight10}`}>
            <DockerInfo
              data={currentTaskRole.dockerInfo}
              onChange={contentOnChange}
              selectedIdx={selectedIdx}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.width100}`}>
            <AdvancedSetting
              data={currentTaskRole}
              onChange={contentOnChange}
            />
          </div>
        </div>

      </div>
    </>
  );
};

Content.propTypes = {
  selectedTab: PropTypes.string,
  selectedIdx: PropTypes.number,
  checkDupName: PropTypes.func,
  jobTaskRoles: PropTypes.array,
  setJobTaskRoles: PropTypes.func
}

export default Content;