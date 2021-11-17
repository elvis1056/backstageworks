import React, { useState, useEffect, useContext } from 'react';
import { Icon, Modal } from 'office-ui-fabric-react';
import { BaseStepper } from 'components/BaseStepper';
import { JobTaskRole } from 'views/Schedule/components/models/job-task-role';
import { DockerInfo } from 'views/Schedule/components/models/docker-info';
import { Completion } from 'views/Schedule/components/completion';

import Context from '../Schedule/Context';
import GlobalContext from 'layouts/Main/GlobalContext'
import { GB } from 'constant';

import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { getUserNfs, getUsersGlusterfs } from 'utils/api';
import styles from './ModifyScheduleModal.module.scss';
import { Step1, Step2, Step3, Step4, Step5 } from '../Schedule/steps';

const ModifyScheduleModal = ({ onClose, isOpen, selectedVg, selectedVgHasGpu, data, canUseVg, getData }) => {
  const { t } = useTranslation();
  const { userInfo } = useContext(GlobalContext);
  const currentUserName = userInfo.username
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
    // virtualGroup: selectedVg,
    cpu: 0,
    gpu: {},
    memory: 0,
    storage: 0,
    startAt: null,
    endAt: null,
    jobName: `${userInfo.username}_${Date.now()}`,
    retryCount: 0,
    gpuType: '',
    taskRoles: 1
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
    // { name: '', mountPoint: '' }
  ]);
  const [glusterfsMounts, setGlusterfsMountsState] = useState([
    // { name: '', mountPoint: '' }
  ]);
  const [parameters, setParameters] = useState([
    // { key: '', value: '' }
  ]);

  const getSteps = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <Step1
            createDate={null}
            dataId={data.id}
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
              cpu: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.cpu, 0) +  (jobTaskRoles.length),
              disk: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.storageGB, 0),
              ram: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.memoryMB, 0) +  (1024 * jobTaskRoles.length),
              gpu: {
                num: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.gpu, 0),
                type: step1State.gpuType
              }
            }}
            dataId={data.id}
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
              cpu: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.cpu, 0) +  (jobTaskRoles.length),
              gpu: {
                num: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.gpu, 0),
                type: Object.keys(step1State.gpu)[0]
              },
              rdma: parameters.find(param => param.key === 'paiAzRDMA') && parameters.find(param => param.key === 'paiAzRDMA').value === 'true' ? true : false,
              ram: jobTaskRoles.reduce((acc, curr) => acc += curr.containerSize.memoryMB, 0) +  (1024 * jobTaskRoles.length),
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
            dataId={data.id}
            glusterfsMounts={glusterfsMounts}
            jobTaskRoles={jobTaskRoles}
            nfsMounts={nfsMounts}
            parameters={parameters}
            resetDefault={resetDefault}
            setActiveStep={setActiveStep}
            step1State={step1State}
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

  useEffect(() => {
    if (!isEmpty(data)) {
      setStep1State(prev => {
        const { name, cpu, memory, storage, gpu, startAt, endAt, jobConfig, users } = data;
        return {
          ...prev, name, startAt, endAt, storage, gpu, cpu, memory,
          user: users && users[0],
          gpuType: !isEmpty(data.gpu) ? Object.keys(data.gpu)[0] : '',
          virtualGroup: selectedVg,
          jobName: jobConfig !== null ? jobConfig.jobName : `${userInfo.username}_${Date.now()}`,
          retryCount: jobConfig !== null ? jobConfig.retryCount : 0
        }
      })
      const { jobConfig } = data
      if (jobConfig !== null) {
        const { extras, taskRoles } = jobConfig;
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
        setNfsMountsState(extras.nfsList)
        setGlusterfsMountsState(extras.glusterfsList)
        setJobTaskRoles(newTaskRoles)
      } else {
        setIsPreScheduledJob(false)
      }
    }
  }, [data])

  const resetDefault = () => {
    onClose()
    setStep1State(defaultStep1)
    setStep2State(defaultStep2)
    getData()
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
        <Modal
          isOpen={isOpen}
          styles={
            {
              main: {
                height: window.innerHeight >= 750 ? 750 : window.innerHeight,
                width: window.innerWidth >= 700 ? 700 : window.innerWidth,
                padding: '20px',
                overflow: 'hidden'
              },
              scrollableContent: { maxHeight: '', height: '100%' },
              layer: { zIndex: 1030 }
            }
          }
        >
          <div className={styles.title}>
            <div className={styles.name}>
              {t('modify')}{t('enSpace')}{t('schedule')}
            </div>
            <div className={styles.icons}>
              <Icon
                iconName={'Cancel'}
                onClick={() => {
                  resetDefault()
                }}
                styles={{ root: { cursor: 'pointer' } }}
              />
            </div>
          </div>
          <BaseStepper
            activeStep={activeStep}
            steps={steps}
          />
          {getSteps(activeStep)}
        </Modal>
      </div>
    </Context.Provider>
  );
};

ModifyScheduleModal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  data: PropTypes.object,
  selectedVg: PropTypes.string,
  selectedVgHasGpu: PropTypes.bool,
  canUseVg: PropTypes.array,
  getData: PropTypes.func
};

export default ModifyScheduleModal;