import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    '& .MuiInputBase-root': {
      height: 40
    },
    '& .MuiInputLabel-outlined': {
      transform: 'translate(14px, 14px) scale(1)'
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)'
    }
    // '& .MuiInputLabel-formControl': {
    //   top: -5
    // },
    // '& .Mui-focused':{
    //   top: 0
    // }
  }
}))

export const BaseTextField = ({ ...props }) => {
  const classes = useStyles();
  return (
    <TextField
      className={`${classes.root}`}
      variant="outlined"
      // styles={{
      //   fieldGroup: { borderRadius: '3px' }
      // }}
      {...props}
    />
  )
}

export default BaseTextField;
