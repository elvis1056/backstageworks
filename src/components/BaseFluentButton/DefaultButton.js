import React from 'react';
import PropTypes from 'prop-types';
import { DefaultButton as UIButton, getTheme } from 'office-ui-fabric-react';

const theme = getTheme()

const styles = {
  root: {
    border: '1px solid',
    borderColor: '#8A8886',
    borderRadius: '3px',
    padding: '0 15px',
    width: 'auto',
    height: '32px',
    backgroundColor: theme.palette.white,
    boxSizing: 'border-box',
    textAlign: 'center',
    color: `${theme.palette.black} !important`,
    fontWeight: 'normal'
  },
  label: {
    fontWeight: 'normal'
  }
}

export const DefaultButton = ({ children, ...props }) => {
  return (
    <UIButton
      styles={styles}
      {...props}
    >
      {children}
    </UIButton>
  )
}

DefaultButton.propTypes = {
  children: PropTypes.node
}

export default DefaultButton