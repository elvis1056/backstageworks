import React, { useState, useEffect } from 'react';
import { mergeStyles } from 'office-ui-fabric-react';
import { DefaultButton, PrimaryButton } from 'components/BaseButton';
import TaskRole from './Step3/TaskRole';
import { validate } from 'joi-browser';
import { TaskRolesSechma } from '../model/JobTaskRoleSchema';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './Step3.module.scss';

export const Step3 = ({ vgState, data, alreadyUsedResource, jobTaskRoles, setJobTaskRoles, setActiveStep, resetDefault, dataId, step2State, currentUserName }) => {
  const { t } = useTranslation();
  const [openNextBtn, setOpenNextBtn] = useState(false);
  const [, setError] = useState(null);

  const checkStep3Resource = (data, alreadyUsedResource, vgState) => {
    const cpuUsed = data.cpu + alreadyUsedResource.cpu;
    const memoryUsed = data.ram + alreadyUsedResource.memory;
    const storageUsed = data.disk + alreadyUsedResource.storage;
    let gpuUsed = 0;
    let gpuTotal = 0;
    if (cpuUsed > vgState.cpu) {
      setError(t('mustInputAvailableCpu'))
      return false
    }
    if (memoryUsed > vgState.memory) {
      setError(t('mustInputAvailableMemory'))
      return false
    }
    if (storageUsed > vgState.storageUsed) {
      setError(t('mustInputAvailableStorage'))
      return false
    }

    if (Object.values(data.gpu)[1] !== '') {
      Object.entries(alreadyUsedResource.gpu).map(([key, value]) => {
        if (Object.values(data.gpu)[1] === key) {
          gpuUsed = data.gpu.num + value
          gpuTotal = vgState.gpu[key]
        }
      })
    } else {
      gpuUsed = data.gpu.num
    }

    if (gpuUsed > gpuTotal) {
      setError(t('isNotEnough', { name: t('GPU') }))
      return false
    }

    setError(null)
    return true
  }

  const checkStep3TaskRoles = (jobTaskRoles) => {
    const { error: TaskRoleErr } = validate(jobTaskRoles, TaskRolesSechma)
    const hasError = TaskRoleErr
    if (hasError === null) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    if (checkStep3TaskRoles(jobTaskRoles) && checkStep3Resource(data, alreadyUsedResource, vgState)) {
      setOpenNextBtn(true)
    } else {
      setOpenNextBtn(false)
    }
  }, [jobTaskRoles])

  useEffect(() => {
    if (!step2State.isModify) {
      if (step2State.templateInfo.owner === currentUserName) {
        if (checkStep3Resource(data, alreadyUsedResource, vgState)) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
      }
    }
  }, [step2State])

  return (
    <div className={styles.container}>
      <div className={`${styles.header} ${styles.headerBorderBottom}`}>
        <div>{t('virtualCluster')}{t('enSpace')}{t('status')} ({t('useAndAll')})</div>
        <div className={`${styles.vgStateContainer} ${styles.marginBottom10}`}>
          <div className={`${styles.width25} ${((data.cpu + alreadyUsedResource.cpu) > vgState.cpu) && styles.errorColor}`}>
            <div>{t('CPU')}</div>
            <div>{data.cpu + alreadyUsedResource.cpu} / {vgState.cpu}</div>
          </div>
          <div className={`${styles.width25} ${((data.ram + alreadyUsedResource.memory) > vgState.memory) && styles.errorColor}`}>
            <div>{t('memory')}(MB)</div>
            <div>{data.ram + alreadyUsedResource.memory} / {vgState.memory}</div>
          </div>
          <div className={`${styles.width25} ${((data.disk + alreadyUsedResource.storage) > vgState.storage) && styles.errorColor}`}>
            <div>{t('disk')}(GB)</div>
            <div>{data.disk + alreadyUsedResource.storage} / {vgState.storage}</div>
          </div>
          {
            Object.values(data.gpu)[1] !== ''
              ? Object.entries(alreadyUsedResource.gpu).map(([key, value]) => {
                if (Object.values(data.gpu)[1] === key) {
                  return (
                    <div className={`${styles.width25} ${((data.gpu.num + value) > vgState.gpu[key]) && styles.errorColor}`}>
                      <div>{t('GPU')} {key}</div>
                      <div>{data.gpu.num + value} / {vgState.gpu[key]}</div>
                    </div>
                  )
                }
              })
              :
              <div className={`${styles.width25} ${data.gpu.num > 0 && styles.errorColor}`}>
                <div>{t('GPU')}</div>
                <div>{t('no2')}</div>
              </div>
          }
        </div>
      </div>
      <TaskRole
        jobTaskRoles={jobTaskRoles}
        setJobTaskRoles={setJobTaskRoles}
      />
      <div className={`${styles.width100} ${styles.footer}`}>
        <DefaultButton
          onClick={() => resetDefault()}
          text={t('cancel')}
        />
        <div>
          <PrimaryButton
            onClick={() => setActiveStep((prevActiveStep) => dataId ? prevActiveStep - 2 : prevActiveStep - 1)}
            text={t('Back')}
          />
          <PrimaryButton
            className={mergeStyles({ marginLeft: '10px' })}
            disabled={!openNextBtn}
            onClick={() => {
              setActiveStep((prevActiveStep) => prevActiveStep + 1)
            }}
            text={t('Next')}
          />
        </div>
      </div>
    </div>
  )
}

Step3.propTypes = {
  vgState: PropTypes.object,
  data: PropTypes.object,
  alreadyUsedResource: PropTypes.object,
  jobTaskRoles: PropTypes.array,
  setJobTaskRoles: PropTypes.func,
  setActiveStep: PropTypes.func,
  resetDefault: PropTypes.func,
  dataId: PropTypes.number,
  step2State: PropTypes.object,
  currentUserName: PropTypes.string
}
