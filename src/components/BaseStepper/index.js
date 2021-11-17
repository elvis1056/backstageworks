import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import PropTypes from 'prop-types';
// import styleScss from  './index.module.scss';

export const BaseStepper = ({ title, isRequired, activeStep, steps }) => {
  const QontoConnector = withStyles({
    alternativeLabel: {
      top: 8,
      left: 'calc(-50% + 20px)',
      right: 'calc(50% + 20px)'
    },
    lineHorizontal: {
      borderTopWidth: '1px'
    }
  })(StepConnector);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%'
    },
    backButton: {
      marginRight: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    label: {
      fontSize: '14px'
    },
    iconContainer: { // define styles for icon container
      transform: 'scale(1.6)'
    },
    text: {
      fontSize: '12px'
    }
  }));

  const classes = useStyles();

  return (
    <div>
      {
        title &&
          <div style={{ padding: '5px 0' }}>
            {title}
            { isRequired && <span style={{ color: 'red' }}> *</span> }
          </div>
      }
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<QontoConnector />}
      >
        {
          steps.map((label) => (
            <Step key={label}>
              <StepLabel
                StepIconProps={{
                  classes: {
                    text: classes.text
                  }
                }}
                classes={{
                  iconContainer: classes.iconContainer,
                  label: classes.label
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))
        }
      </Stepper>
    </div>
  );
};

BaseStepper.propTypes = {
  title: PropTypes.string,
  isRequired: PropTypes.bool,
  steps: PropTypes.array,
  onChange: PropTypes.func,
  activeStep: PropTypes.number,
  onPreChange: PropTypes.func,
  cancelButton: PropTypes.node,
  openNextBtn: PropTypes.bool,
  onSubmit: PropTypes.func,
  onSubmitInSpecificStep: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func
  ])
};

export default BaseStepper;
