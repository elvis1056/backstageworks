import React, { useState, useEffect, useContext } from 'react';
import { Icon } from 'office-ui-fabric-react';
import { useTranslation } from 'react-i18next';
import { BaseStepper } from 'components/BaseStepper';
import { JobTaskRole } from 'views/Schedule/components/models/job-task-role';
import { GB } from 'constant';
import styles from './CreateSchedule.module.scss';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import GlobalContext from 'layouts/Main/GlobalContext'
import Context from './Context';
import { getUserNfs, getUsersGlusterfs } from 'utils/api';
import { Step1, Step2, Step3, Step4, Step5 } from './steps';

function CreateSchedule({ onClose, selectedVg, selectedVgHasGpu, createDate, getData, canUseVg }) {
  const { t } = useTranslation();
  const { userInfo } = useContext(GlobalContext);
  const currentUserName = userInfo.username;
  const [nfsInfo, setNfsInfo] = useState([]);
  const [glusterfsInfo, setGlusterfsInfo] = useState([]);
  const [errorMessage, setErrorMessageState] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [isPrvScheduledJob, setIsPreScheduledJob] = useState(true);
  const [alreadyUsedResource, setAlreadyUsedResource] = useState({});

  const steps = [
    t('schedule-step1Name'),
    t('schedule-step2Name'),
    t('schedule-step3Name'),
    t('schedule-step4Name'),
    t('schedule-step5Name')
  ]

  const defaultStep1 = {
    name: '',
    virtualGroup: selectedVg,
    cpu: 0,
    gpu: {},
    memory: 0,
    storage: 0,
    startAt: null,
    endAt: null,
    jobName: `${userInfo.username}_${Date.now()}`,
    retryCount: 0,
    gpuType: ''
  }

  const defaultStep2 = {
    selectedKey: null,
    isModify: true,
    templateInfo: {}
  }

  const [step1State, setStep1State] = useState(defaultStep1);
  const [step2State, setStep2State] = useState(defaultStep2);

  const [jobTaskRoles, setJobTaskRoles] = useState([
    new JobTaskRole({ name: 'Task_role_1', commands: 'sleep infinity' })
  ]);

  const [nfsMounts, setNfsMountsState] = useState([
    { name: '', mountPoint: '' }
  ]);
  const [glusterfsMounts, setGlusterfsMountsState] = useState([
    { name: '', mountPoint: '' }
  ]);
  const [parameters, setParameters] = useState([{ key: '', value: '' }]);

  const getSteps = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <Step1
            createDate={createDate}
            defaultStep1={defaultStep1}
            isPrvScheduledJob={isPrvScheduledJob}
            resetDefault={resetDefault}
            selectedVg={selectedVg}
            selectedVgHasGpu={selectedVgHasGpu}
            selectedVgUsers={[]}
            setActiveStep={setActiveStep}
            setAlreadyUsedResource={setAlreadyUsedResource}
            setIsPreScheduledJob={setIsPreScheduledJob}
            setStep1State={setStep1State}
            step1State={step1State}
          />
        );
      case 1:
        return (
          <Step2
            resetDefault={resetDefault}
            setActiveStep={setActiveStep}
            setJobTaskRoles={setJobTaskRoles}
            setStep2State={setStep2State}
            step2State={step2State}
          />
        );
      case 2:
        return (
          <Step3
            alreadyUsedResource={alreadyUsedResource}
            currentUserName={currentUserName}
            data={{
              cpu: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.cpu, 0) + (jobTaskRoles.length),
              disk: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.storageGB, 0),
              ram: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.memoryMB, 0) + (1024 * jobTaskRoles.length),
              gpu: {
                num: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.gpu, 0),
                type: step1State.gpuType
              }
            }}
            jobTaskRoles={jobTaskRoles}
            resetDefault={resetDefault}
            setActiveStep={setActiveStep}
            setJobTaskRoles={setJobTaskRoles}
            step2State={step2State}
            vgState={canUseVg.find(item => item.name === selectedVg)}
          />
        );
      case 3:
        return (
          <Step4
            glusterfsInfo={glusterfsInfo}
            glusterfsMounts={glusterfsMounts}
            nfsInfo={nfsInfo}
            nfsMounts={nfsMounts}
            parameters={parameters}
            resetDefault={resetDefault}
            setActiveStep={setActiveStep}
            setGlusterfsMountsState={setGlusterfsMountsState}
            setNfsMountsState={setNfsMountsState}
            setParameters={setParameters}
            step2State={step2State}
          />
        );
      default:
        return (
          <Step5
            data={{
              disk: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.storageGB, 0),
              cpu: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.cpu, 0) + jobTaskRoles.length,
              gpu: {
                num: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.gpu, 0),
                type: Object.keys(step1State.gpu)[0]
              },
              rdma: parameters.find(param => param.key === 'paiAzRDMA') && parameters.find(param => param.key === 'paiAzRDMA').value === 'true' ? true : false,
              ram: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.memoryMB, 0) + (1024 * jobTaskRoles.length),
              shm: jobTaskRoles.reduce((acc, curr) => acc += curr.shmMB, 0),
              nfs: nfsMounts.reduce((acc, curr) => {
                const findData = nfsInfo.find(item => item.name === curr.name);
                if (!findData) return acc

                const { used, size } = findData
                return acc += (((size * GB) - used) / GB)
              }, 0),
              glusterfs: glusterfsMounts.reduce((acc, curr) => {
                if (!glusterfsInfo.find(fs => fs.name === curr.name)) return acc

                const { available } = glusterfsInfo.find(fs => fs.name === curr.name)

                return acc += available / 1048576
              }, 0)
            }}
            glusterfsMounts={glusterfsMounts}
            jobTaskRoles={jobTaskRoles}
            nfsMounts={nfsMounts}
            parameters={parameters}
            resetDefault={resetDefault}
            setActiveStep={setActiveStep}
            step1State={step1State}
            vgState={canUseVg.find(item => item.name === selectedVg)}
          />
        );
    }
  }

  const setErrorMessage =
    (id, msg) => {
      setErrorMessageState(prev => {
        if (isEmpty(msg)) {
          if (prev !== undefined && prev[id] !== undefined) {
            const updated = { ...prev };
            delete updated[id];
            return updated;
          }
        } else {
          if (prev !== undefined && prev[id] !== msg) {
            return {
              ...prev,
              [id]: msg
            };
          }
        }
        return prev;
      });
    }

  useEffect(() => {
    if (isEmpty(userInfo)) return;
    Promise.all([getUserNfs(currentUserName), getUsersGlusterfs(currentUserName)])
      .then(([nfs, glusterfs]) => {
        setNfsInfo(nfs)
        setGlusterfsInfo(glusterfs)
      })
  }, [userInfo])

  const resetDefault = () => {
    onClose()
    setStep1State(defaultStep1)
    setStep2State(defaultStep2)
    getData(selectedVg)
  }

  const context = {
    userInfo,
    setErrorMessage,
    errorMessage,
    setErrorMessageState,
    activeStep
  }

  return (
    <Context.Provider value={context}>
      <div className={styles.form}>
        <div className={styles.title}>
          <div className={styles.title__left}>
            {t('add')}{t('enSpace')}{t('schedule')}
          </div>
          <div className={styles.title__right}>
            <div className={styles.title__right__icon}>
              <Icon
                iconName={'Cancel'}
                onClick={() => {
                  resetDefault()
                }}
              />
            </div>
          </div>
        </div>

        <BaseStepper
          activeStep={activeStep}
          steps={steps}
        />
        {getSteps(activeStep)}
      </div>
    </Context.Provider>
  );
}

CreateSchedule.propTypes = {
  onClose: PropTypes.func,
  createDate: PropTypes.instanceOf(Date),
  getData: PropTypes.func,
  selectedVg: PropTypes.string,
  selectedVgHasGpu: PropTypes.bool,
  canUseVg: PropTypes.array
}

export default CreateSchedule;