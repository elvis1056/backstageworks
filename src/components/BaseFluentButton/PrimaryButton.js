import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton as UIButton } from 'office-ui-fabric-react';

const styles = {
  root: {
    height: '32px',
    border: '1px solid transparent',
    boxSizing: 'border-box',
    borderRadius: '3px'
  }
}

export const PrimaryButton = ({ children, ...props }) => {
  return (
    <UIButton
      styles={styles}
      {...props}
    >
      {children}
    </UIButton>
  )
}

PrimaryButton.propTypes = {
  children: PropTypes.node
}

export default PrimaryButton