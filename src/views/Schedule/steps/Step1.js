import React, { useState, useEffect, useContext } from 'react';
import { mergeStyles } from 'office-ui-fabric-react';
import { Dropdown, TextField, ChoiceGroup } from 'components/BaseInput';
import { DefaultButton, PrimaryButton } from 'components/BaseFluentButton';
import { BaseDateTimePicker } from 'components/BaseDateTimePicker';
import { SpinButton } from './Step1/Form/SpinButton';

import { JobResources } from '../model/JobResources';
import styles from './Step1.module.scss';
import { useTranslation } from 'react-i18next';
import { getJobScheduleTable, getUserLimitResource, createJobSchedule, updateJobSchedule } from 'utils/api';
import { checkCanUseResource } from '../../ManageSchedule/utils';
import { makeStyles } from '@material-ui/core/styles';
import Context from '../Context';
import moment from 'moment';
import { isEmpty, isNull, isEqual } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export const Step1 = ({ dataId, setStep1State, step1State, selectedVg, selectedVgHasGpu, selectedVgUsers, setAlreadyUsedResource, createDate, isPrvScheduledJob, setIsPreScheduledJob, setActiveStep, resetDefault, defaultStep1 }) => {
  const { t } = useTranslation();
  const { userInfo } = useContext(Context);
  const [selectedGpuType, setSelectedGpuType] = useState('');
  const [selectedVgUsersKey, setSelectedVgUsersKey] = useState(null);
  const [canUseResource, setCanUseResource] = useState({});
  const [limitResource, setLimitResource] = useState({});
  const [gpuTypeList, setGpuTypeList] = useState([]);
  const [timePickerStartErrMsg, setTimePickerStartErrMsg] = useState('');
  const [timePickerErrMsg, setTimePickerErrMsg] = useState('');

  const [jobName, setJobName] = useState(`${userInfo.username}_${Date.now()}`);
  const [user, setUser] = useState();
  const [name, setName] = useState('');
  const [retryCount, setRetryCount] = useState(0);
  const [startAt, setStartAt] = useState(null);
  const [endAt, setEndAt] = useState(null);
  const [cpu, setCpu] = useState(0);
  const [memory, setMemory] = useState(0);
  const [storage, setStorage] = useState(0);
  const [gpu, setGpu] = useState({});

  const [openNextBtn, setOpenNextBtn] = useState(false);

  const helperTextStyles = makeStyles(() => ({ root: { margin: 4, color: 'red' } }));

  const helperTestClasses = helperTextStyles();

  const ChoiceFieldStyle = {
    flexContainer: {
      display: 'flex'
    },
    root: {
      selectors: {
        '& .ms-ChoiceField': {
          paddingRight: '20px',
          marginTop: '0px'
        },
        '& .ms-ChoiceField-field': {
          marginBottom: '0px',
          fontWeight: '400'
        }
      }
    }
  }

  const Rules = {
    required: value => (value ? '' : t('fieldRequired')),
    mustBeNumber: value => (isNaN(value) ? t('mustInputNumber') : '')
  };

  const getCanUseResource = (selectedStartDate, selectedEndDate) => {
    getJobScheduleTable(selectedVg, dataId)
      .then((res) => (
        [
          checkCanUseResource(
            moment(selectedStartDate).valueOf(),
            moment(selectedEndDate).valueOf(),
            res.data,
            res.virtualGroup
          ),
          res.virtualGroup
        ]
      ))
      .then(([res, totalData]) => {
        setCanUseResource(res)
        // Calculate used resources
        const otherData = [res]
        const result = otherData.reduce((acc, cur) => {
          const accumulatorGpu = { ...acc.gpu };
          Object.entries(acc.gpu).forEach(([gpuType, totalGpuNumber]) => {
            if (!cur.gpu[gpuType]) return
            accumulatorGpu[gpuType] = totalGpuNumber - cur.gpu[gpuType]
          })
          acc.cpu = acc.cpu - cur.cpu
          acc.memory = acc.memory - cur.memory
          acc.storage = acc.storage - cur.storage
          acc.gpu = accumulatorGpu
          return acc
        }, { ...totalData })
        setAlreadyUsedResource(result)
      })
      .catch(err => {
        toast.error('Error:' + err.data ? err.data.message : err.message)
      })
  }

  const addDropDownOptionKeys = (optionItems, defaultSelect) => {
    if (defaultSelect !== undefined) {
      return [defaultSelect, ...optionItems].map((item, index) => ({
        key: index,
        text: item.name,
        ...item
      }));
    } else {
      return optionItems.map((item, index) => ({
        key: index,
        text: item.name,
        ...item
      }));
    }
  };

  const onSubmit = async (data) => {
    try {
      dataId ? await updateJobSchedule(dataId, data, true) : await createJobSchedule(data)
      toast.success(t('success'));
      resetDefault()
    } catch (err) {
      if (err.data && err.data.message === 'startAt must >= now') {
        toast.error(`${t('time')}${t('enSpace')}${t('error')}`)
      } else {
        toast.error(err.data ? err.data.message : err.message)
      }
    }
  }

  useEffect(() => {
    if (!isEqual(step1State, defaultStep1)) {
      const { user, cpu, memory, storage, gpu, gpuType, name, startAt, endAt, jobName, retryCount } = step1State;
      setCpu(cpu)
      setMemory(memory)
      setStorage(storage)
      setGpu(gpu)
      setSelectedGpuType(gpuType)
      setName(name)
      setStartAt(startAt)
      setEndAt(endAt)
      setJobName(jobName)
      setRetryCount(retryCount)
      if (user !== undefined) {
        setUser(user)
      }
    }
  }, [step1State])

  useEffect(() => {
    if (canUseResource.gpu) {
      const gpuList = Object.keys(canUseResource.gpu).map(item => (
        { key: item, text: item }
      ))
      setGpuTypeList(gpuList)
    }
  }, [canUseResource])

  useEffect(() => {
    if (!isNull(createDate)) {
      setStartAt(createDate)
    }
  }, [createDate])

  useEffect(() => {
    if (!isNull(startAt) && !isNull(endAt)) {
      getCanUseResource(startAt, endAt)
    }
  }, [startAt, endAt])

  // use to ManageSchedule
  useEffect(() => {
    if (user === undefined) {
      getUserLimitResource(userInfo.username)
        .then(res => setLimitResource(res.limitResource))
        .catch(err => (toast.error('Error:' + err.data ? err.data.message : err.message)))
      return
    }
    if (user !== undefined) {
      getUserLimitResource(user)
        .then(res => setLimitResource(res.limitResource))
        .catch(err => (toast.error('Error:' + err.data ? err.data.message : err.message)))
      return
    }
  }, [user])

  // use to check step1
  useEffect(() => {
    if (name === '') {
      setOpenNextBtn(false)
    } else if (moment(endAt).valueOf() - moment(startAt).valueOf() <= 0 || isNaN(moment(endAt).valueOf() - moment(startAt).valueOf())) {
      setOpenNextBtn(false)
    } else if (!isEmpty(selectedVgUsers) && selectedVgUsersKey === null) {
      setOpenNextBtn(false)
    } else {
      setOpenNextBtn(true)
    }
  }, [name, startAt, endAt, selectedVgUsersKey])

  return (
    <div className={styles.container}>

      {
        !isEmpty(selectedVgUsers) &&
        <div className={styles.row}>
          <div className={styles.row__average}>
            <div className={styles.row__average__block}>
              <Dropdown
                ariaLabel={`${t('select')}${t('enSpace')}${t('User')}`}
                label={`${t('select')}${t('enSpace')}${t('User')}`}
                onChange={(event, item) => {
                  setSelectedVgUsersKey(item.key)
                  setJobName(`${item.text}_${Date.now()}`)
                  setUser(item.text)
                }}
                options={selectedVgUsers}
                placeholder={`${t('select')}${t('enSpace')}${t('User')}`}
                required
                selectedKey={selectedVgUsersKey}
              />
            </div>
          </div>
        </div>
      }
      {
        (
          limitResource.enabled === false ||
          (limitResource.cpu === null && limitResource.memory === null && limitResource.storage === null && limitResource.gpu === null)
        ) ?
          <></>
          :
          <>
            <div className={`${styles.row} ${styles.marginTop10} ${styles.paddingBottom10}`}>{t('allocatable')}{t('enSpace')}{t('resource')}</div>
            <div className={`${styles.row} ${styles.paddingBottom10} ${styles.row__borderBottomLine}`}>
              <div className={styles.row__average}>
                <div className={styles.row__average__block}>
                  <div className={`${styles.row}`}>
                    <div className={styles.row__average__block50}>
                      <div>{t('CPU')}</div>
                      <div>{limitResource.cpu}</div>
                    </div>
                    <div className={styles.row__average__block50}>
                      <div>{t('memory')} (MB)</div>
                      <div>{limitResource.memory}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.row__average__block}>
                  <div className={`${styles.row}`}>
                    <div className={styles.row__average__block50}>
                      <div>{t('disk')} (GB)</div>
                      <div>{limitResource.storage}</div>
                    </div>
                    <div className={styles.row__average__block50}>
                      <div>{t('GPU')}</div>
                      <div>
                        {
                          limitResource.gpu &&
                          Object.entries(limitResource.gpu).map(([key, value]) => {
                            return (<div key={key} >{value} ( {key} )</div>)
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.row__average__block} />
              </div>
            </div>
          </>
      }

      <div className={`${styles.row} ${styles.marginTop10}`}>
        <div className={styles.row__average}>
          <div className={styles.row__average__block}>
            <TextField
              className={mergeStyles({ width: '100%' })}
              label={`${t('schedule')}${t('enSpace')}${t('name')}`}
              name={'name'}
              onChange={(e, name) => setName(name)}
              onGetErrorMessage={username => Rules.required(username)}
              required
              type="text"
              validateOnLoad={false}
              value={name}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.row} ${styles.marginTop10}`}>
        <ChoiceGroup
          onChange={(e, item) => setIsPreScheduledJob(item.key)}
          options={[
            { key: true, text: `${t('reserve')}${t('enSpace')}${t('job')}` },
            { key: false, text: `${t('reserve')}${t('enSpace')}${t('resource')}` }
          ]}
          selectedKey={isPrvScheduledJob}
          styles={ChoiceFieldStyle}
        />
      </div>

      {
        isPrvScheduledJob &&
        <div className={styles.row}>
          <div className={styles.row__average}>
            <div className={`${styles.row__average__block} ${styles.row}`}>
              <TextField
                className={mergeStyles({ width: '100%' })}
                label={`${t('job')}${t('enSpace')}${t('name')}`}
                name={'jobname'}
                onChange={(e, jobName) => setJobName(jobName)}
                required
                type="text"
                value={jobName}
              />
            </div>
            <div className={`${styles.row__average__block} ${styles.row}`}>
              <SpinButton
                min={0}
                onChange={retryCount => setRetryCount(retryCount)}
                title={`${t('retryCount')}(${t('optional')})`}
                value={retryCount}
              />
            </div>
            <div className={`${styles.row__average__block} ${styles.row}`} />
          </div>
        </div>
      }

      <div className={`${styles.row}`}>
        <div className={styles.row__average}>
          <div className={styles.row__average__block}>
            <BaseDateTimePicker
              FormHelperTextProps={{ classes: helperTestClasses }}
              helperText={timePickerStartErrMsg}
              invalidDateMessage={t('dateInValid')}
              isRequired
              minDate={step1State.startAt}
              onChange={(item) => setStartAt(item)}
              onError={(err) => {
                if (err) {
                  setTimePickerStartErrMsg(err)
                } else {
                  setTimePickerStartErrMsg('')
                }
              }}
              title={t('selectastartdate')}
              value={startAt}
            />
          </div>
          <div className={styles.row__average__block}>
            <BaseDateTimePicker
              FormHelperTextProps={{ classes: helperTestClasses }}
              helperText={timePickerErrMsg}
              invalidDateMessage={t('dateInValid')}
              isRequired
              minDate={startAt}
              minDateMessage={t('DateShouldNotOverStartDay')}
              onChange={(item) => (setEndAt(item))}
              onError={(err) => {
                if (err) {
                  setTimePickerErrMsg(err)
                } else {
                  setTimePickerErrMsg(moment(endAt).valueOf() - moment(startAt).valueOf() <= 0 ? t('DateShouldNotOverStartDay') : '')
                }
              }}
              title={t('selectaenddate')}
              value={endAt}
            />
          </div>
          <div className={styles.row__average__block} />
        </div>
      </div>

      {
        !isPrvScheduledJob &&
        <div className={`${styles.row} ${!selectedVgHasGpu && styles.paddingBottom72}`}>
          <div className={styles.row__average}>
            <div className={`${styles.row__average__block} ${styles.row}`}>
              <SpinButton
                errorMessage={(cpu > canUseResource.cpu) ? t('mustInputAvailableCpu') : ''}
                max={
                  limitResource.enabled === false
                    ? canUseResource.cpu
                    : limitResource.cpu === null ? canUseResource.cpu : limitResource.cpu
                }
                min={0}
                onChange={cpu => setCpu(cpu)}
                style={{ width: '60%' }}
                title={t('CPU')}
                value={cpu}
              />
              <div className={styles.row__right}>
                <div className={styles.row__right__block}>
                  { canUseResource.cpu ?  '/ ' + canUseResource.cpu : '/ ' + '-' }
                </div>
              </div>
            </div>
            <div className={`${styles.row__average__block} ${styles.row}`}>
              <SpinButton
                errorMessage={(memory > canUseResource.memory) ? t('mustInputAvailableMemory') : ''}
                max={
                  limitResource.enabled === false
                    ? canUseResource.memory
                    : limitResource.memory === null ? canUseResource.memory : limitResource.memory
                }
                min={512}
                onChange={memory => setMemory(memory)}
                style={{ width: '60%' }}
                title={`${t('memorySize')} (MB)`}
                value={memory}
              />
              <div className={styles.row__right}>
                <div className={styles.row__right__block}>
                  { canUseResource.memory ?  '/ ' + canUseResource.memory : '/ ' + '-' }
                </div>
              </div>
            </div>
            <div className={`${styles.row__average__block} ${styles.row}`}>
              <SpinButton
                errorMessage={(storage > canUseResource.storage) ? t('mustInputAvailableStorage') : ''}
                max={
                  limitResource.enabled === false
                    ? canUseResource.storage
                    : limitResource.storage === null ? canUseResource.storage : limitResource.storage
                }
                min={0}
                onChange={storage => setStorage(storage)}
                style={{ width: '60%' }}
                title={`${t('disk')}${t('enSpace')}${t('size')} (GB)`}
                value={storage}
              />
              <div className={styles.row__right}>
                <div className={styles.row__right__block}>
                  {canUseResource.storage ? '/ ' + canUseResource.storage + ' GB' : '/ ' + '-' + ' GB'}
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {
        selectedVgHasGpu &&
        <div className={`${styles.row} ${styles.paddingBottom72}`}>
          <div className={styles.row__average}>
            <div className={styles.row__average__block}>
              <Dropdown
                ariaLabel={`${t('Select')}${t('enSpace')}${t('GPU')}`}
                label={`${t('Select')}${t('enSpace')}${t('GPU')}`}
                onChange={(event, item) => setSelectedGpuType(item.key !== 'select' ? item.text : '')}
                options={addDropDownOptionKeys(gpuTypeList, { key: 'select', text: `${t('select')}${t('enSpace')}${t('type')}` })}
                placeholder={`${t('Select')}${t('enSpace')}${t('GPU')}`}
                selectedKey={selectedGpuType}
              />
            </div>
            {
              !isPrvScheduledJob &&
              <div className={`${styles.row__average__block} ${styles.row}`}>
                <TextField
                  className={mergeStyles({ width: '60%' })}
                  label={`${t('GPU')}${t('enSpace')}${t('amount')}`}
                  name={'gpuAmount'}
                  onChange={(e, gpuAmount) => {
                    if (selectedGpuType !== '') {
                      setGpu({ [selectedGpuType]: gpuAmount })
                    }
                  }}
                  required
                  type="text"
                  value={gpu[selectedGpuType] || 0}
                />
                <div className={styles.row__right}>
                  <div className={styles.row__right__block}>
                    {(selectedGpuType !== '' && !isEmpty(canUseResource)) ? `/ ${canUseResource.gpu[selectedGpuType]}` : '/ -'}
                  </div>
                </div>
              </div>
            }
            <div className={styles.row__average__block} />
          </div>
        </div>
      }

      <div className={`${styles.width100} ${styles.footer}`}>
        <DefaultButton
          onClick={() => resetDefault()}
          text={t('cancel')}
        />
        <PrimaryButton
          disabled={!openNextBtn}
          onClick={() => {
            const state = {
              user: user === undefined ? userInfo.username : user,
              name: name,
              virtualGroup: selectedVg,
              cpu: cpu,
              gpu: selectedGpuType !== '' ? gpu : {},
              memory: memory,
              storage: storage,
              startAt: startAt,
              endAt: endAt,
              jobName: jobName,
              retryCount: retryCount,
              gpuType: selectedGpuType
            }
            if (!isPrvScheduledJob) {
              onSubmit(new JobResources({ modify: dataId ? true : false, step1State: state, userInfo }))
            } else {
              setStep1State(prev => ({ ...prev, ...state }))
              setActiveStep((prevActiveStep) => dataId ? prevActiveStep + 2 : prevActiveStep + 1 )
            }
          }}
          text={!isPrvScheduledJob ? t('submit') : t('Next')}
        />
      </div>
    </div>
  )
}

Step1.propTypes = {
  dataId: PropTypes.number,
  setStep1State: PropTypes.func,
  step1State: PropTypes.object,
  selectedVg: PropTypes.string,
  selectedVgHasGpu: PropTypes.bool,
  selectedVgUsers: PropTypes.array,
  setAlreadyUsedResource: PropTypes.func,
  createDate: PropTypes.instanceOf(Date),
  isPrvScheduledJob: PropTypes.bool,
  setIsPreScheduledJob: PropTypes.func,
  setActiveStep: PropTypes.func,
  resetDefault: PropTypes.func,
  defaultStep1: PropTypes.object
};
