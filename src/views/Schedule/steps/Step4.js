import React from 'react';
import { mergeStyles } from 'office-ui-fabric-react';
import { DefaultButton, PrimaryButton } from 'components/BaseFluentButton';
import StorageSetting from './Step4/StorageSetting';
import Parameter from './Step4/Parameter';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './Step4.module.scss';

export const Step4 = ({ nfsInfo, glusterfsInfo, nfsMounts, setNfsMountsState, setGlusterfsMountsState, glusterfsMounts, parameters, setParameters, resetDefault, setActiveStep, step2State }) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.container} ${styles.paddingBottom72}`}>
      <StorageSetting
        glusterfsInfo={glusterfsInfo}
        glusterfsMounts={glusterfsMounts}
        nfsInfo={nfsInfo}
        nfsMounts={nfsMounts}
        setGlusterfsMountsState={setGlusterfsMountsState}
        setNfsMountsState={setNfsMountsState}
      />
      <Parameter
        parameters={parameters}
        setParameters={setParameters}
      />
      <div className={`${styles.width100} ${styles.footer}`}>
        <DefaultButton
          onClick={() => resetDefault()}
          text={t('cancel')}
        />
        <div>
          <PrimaryButton
            onClick={() => {
              if (!step2State.isModify) {
                setActiveStep((prevActiveStep) => prevActiveStep - 2)
              } else {
                setActiveStep((prevActiveStep) => prevActiveStep - 1)
              }
            }}
            text={t('Back')}
          />
          <PrimaryButton
            className={mergeStyles({ marginLeft: '10px' })}
            onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
            text={t('Next')}
          />
        </div>
      </div>
    </div>
  )
}

Step4.propTypes = {
  nfsInfo: PropTypes.array,
  glusterfsInfo: PropTypes.array,
  nfsMounts: PropTypes.array,
  setNfsMountsState: PropTypes.func,
  setGlusterfsMountsState: PropTypes.func,
  glusterfsMounts: PropTypes.array,
  parameters: PropTypes.array,
  setParameters: PropTypes.func,
  setActiveStep: PropTypes.func,
  resetDefault: PropTypes.func,
  step2State: PropTypes.object
}
