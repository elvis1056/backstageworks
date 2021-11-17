import React, { useContext } from 'react';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
// import { colors } from '@material-ui/core';
import palette from '../../theme/palette';
import GlobalContext from 'layouts/Main/GlobalContext';
import { ja, zhCN, zhTW, enUS } from 'date-fns/locale';
import PropTypes from 'prop-types';

export const BaseDateTimePicker = ({ title, isRequired, ...props }) => {
  const { locale } = useContext(GlobalContext);

  const mapLoacle = (locale) => {
    switch (locale) {
      case 'zh-CN':
        return zhCN
      case 'zh-TW':
        return zhTW
      case 'jp':
        return ja
      case 'en':
      default:
        return enUS
    }
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > .MuiInputBase-root': {
        border: '1px solid rgb(161, 159, 157)',
        height: 32,
        borderRadius: 3,
        padding: 12,
        cursor: 'pointer',
        '& > input': {
          cursor: 'pointer'
        }
      }
    },
    margin: {
      margin: theme.spacing(5)
    }
  }));

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: palette.themePrimary
        // contrastText: colors.green[500],
        // dark: colors.red[800],
        // light: colors.indigo[100]
      }
    }
  });

  const classes = useStyles();

  return (
    <div style={{ width: '100%' }}>
      <div style={{ padding: '5px 0' }}>
        {title}
        { isRequired && <span style={{ color: 'red' }}> *</span> }
      </div>
      <MuiPickersUtilsProvider
        locale={mapLoacle(locale)}
        themes={theme}
        utils={DateFnsUtils}
      >
        <KeyboardDateTimePicker
          InputProps={{
            disableUnderline: true
          }}
          ampm={false}
          className={`${classes.root}`}
          format="yyyy/MM/dd HH:mm"
          {...props}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

BaseDateTimePicker.propTypes = {
  title: PropTypes.string,
  isRequired: PropTypes.bool
};

export default BaseDateTimePicker;
