import React, { useContext } from 'react';
import { mergeStyles } from 'office-ui-fabric-react';
import { DefaultButton, PrimaryButton } from 'components/BaseButton';
import PreviewModal from './Step5/PreviewModal';
import { JobFinalData } from '../model/JobFinalData';
import Context from '../Context';
import { createJobSchedule, updateJobSchedule } from 'utils/api';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export const Step5 = ({ data, resetDefault, setActiveStep, step1State, jobTaskRoles, nfsMounts, glusterfsMounts, parameters, dataId }) => {
  const { t } = useTranslation();
  const { userInfo } = useContext(Context);
  const onSubmit = async (data) => {
    try {
      dataId ? await updateJobSchedule(dataId, data) : await createJobSchedule(data)
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

  return (
    <div style={{ height: '480px', marginTop: '10px', marginBottom: '10px', padding: '0 20px 72px' }}>
      <PreviewModal data={data} />
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: '20px', left: 0, padding: '0 20px', width: '100%' }}>
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
            onClick={() => {
              onSubmit(new JobFinalData({ modify: dataId ? true : false, step1State, jobTaskRoles, nfsMounts, glusterfsMounts, parameters, userInfo }))
            }}
            text={t('submit')}
          />
        </div>
      </div>
    </div>
  )
}

Step5.propTypes = {
  data: PropTypes.object,
  resetDefault: PropTypes.func,
  setActiveStep: PropTypes.func,
  step1State: PropTypes.object,
  jobTaskRoles: PropTypes.object,
  nfsMounts: PropTypes.array,
  glusterfsMounts: PropTypes.array,
  parameters: PropTypes.array,
  dataId: PropTypes.number
}
