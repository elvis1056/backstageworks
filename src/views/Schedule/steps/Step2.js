import React, { useState, useEffect } from 'react';
import { mergeStyles } from 'office-ui-fabric-react';
import { ChoiceGroup  } from 'components/BaseInput';
import { useTranslation } from 'react-i18next';
import { DefaultButton, PrimaryButton } from 'components/BaseFluentButton';
import { JobTaskRole } from 'views/Schedule/components/models/job-task-role';
import { DockerInfo } from 'views/Schedule/components/models/docker-info';
import { Completion } from 'views/Schedule/components/completion';
import { isEmpty } from 'lodash';
import { toast } from 'react-toastify';
import { Step2Table } from './Step2Table';
import PropTypes from 'prop-types';

export const Step2 = ({ step2State, setStep2State, setActiveStep, resetDefault, setJobTaskRoles }) => {
  const { t } = useTranslation();
  const [openNextBtn, setOpenNextBtn] = useState(false);

  useEffect(() => {
    const { selectedKey, templateInfo } = step2State;
    if (selectedKey === 0) {
      setOpenNextBtn(true)
    } else if (selectedKey === 1 && !isEmpty(templateInfo)) {
      const { jobConfig } = templateInfo
      const { taskRoles } = jobConfig;
      const newTaskRoles = taskRoles && taskRoles.map && taskRoles.map(item => {
        const { name: taskRoleName, dockerImage, taskNumber, cpuNumber, shmMB, minFailedTaskCount, minSucceededTaskCount, command, portList, storageGB, memoryMB, gpuNumber } = item
        return (
          new JobTaskRole({
            name: taskRoleName,
            dockerInfo: new DockerInfo(dockerImage),
            instances: taskNumber,
            ports: portList && portList.map(port => ({ key: port.label, value: port.beginAt })),
            commands: command,
            completion: new Completion({ minFailedInstances: minFailedTaskCount, minSucceededInstances: minSucceededTaskCount }),
            containerSize: { gpu: gpuNumber, cpu: cpuNumber, storageGB, memoryMB },
            shmMB
          })
        )
      })
      if (newTaskRoles.length > 0) {
        setJobTaskRoles(newTaskRoles)
        setOpenNextBtn(true)
      } else {
        toast.error(t('isNotEnough', { name: t('taskCount') }));
        setOpenNextBtn(false)
      }
    } else {
      setOpenNextBtn(false)
    }
  }, [step2State])

  const ChoiceFieldStyle = {
    root: {
      selectors: {
        '& .ms-ChoiceField-field': {
          fontWeight: '400'
        }
      }
    }
  }

  return (
    <div style={{ height: '480px', paddingBottom: '72px' }}>
      <ChoiceGroup
        onChange={(e, item) => {
          setStep2State((prev) => ({ ...prev, selectedKey: item.key, isModify: true }))
        }}
        options={[{ key: 0, text: t('Custom') }]}
        selectedKey={step2State.selectedKey}
        styles={ChoiceFieldStyle}
      />
      <ChoiceGroup
        onChange={(e, item) => {
          setStep2State((prev) => ({ ...prev, selectedKey: item.key, isModify: true }))
        }}
        options={[{ key: 1, text: `${t('Template')}` }]}
        selectedKey={step2State.selectedKey}
        styles={ChoiceFieldStyle}
      />
      {
        step2State.selectedKey === 1 &&
        <Step2Table
          setStep2State={setStep2State}
          step2State={step2State}
        />
      }
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: '0', left: 0, padding: '20px', width: '100%', backgroundColor: '#fff' }}>
        <DefaultButton
          onClick={() => resetDefault()}
          text={t('cancel')}
        />
        <div>
          <DefaultButton
            onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
            text={t('Back')}
          />
          <PrimaryButton
            className={mergeStyles({ marginLeft: '10px' })}
            disabled={!openNextBtn}
            onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
            text={t('Next')}
          />
        </div>
      </div>
    </div>
  )
}

Step2.propTypes = {
  step2State: PropTypes.object,
  setStep2State: PropTypes.func,
  setActiveStep: PropTypes.func,
  resetDefault: PropTypes.func,
  setJobTaskRoles: PropTypes.func
};
