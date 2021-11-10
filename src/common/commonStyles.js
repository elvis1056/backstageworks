const commonStyle = (theme) => {
  const { largeAlpha } = theme.bp

  return {
    // width and height
    w_full: {
      width: '100%'
    },
    w_screen: {
      width: '100vw'
    },
    w_auto: {
      width: 'auto'
    },
    h_full: {
      height: '100%'
    },
    h_screen: {
      height: '100vw'
    },
    h_auto: {
      height: 'auto'
    },
    h_30: {
      height: 30
    },
    // col
    col_3: {
      width: 'auto',
      maxWidth: '25%',
      minWidth: 'calc((100% / 12) * 3)'
    },
    col_4: {
      width: 'auto',
      maxWidth: '33.3333%',
      minWidth: 'calc((100% / 12) * 4)'
    },
    col_6: {
      width: 'auto',
      maxWidth: '50%',
      minWidth: 'calc((100% / 12) * 6)'
    },
    'largeAlpha:col_6': {
      [theme.breakpoints.down(largeAlpha)]: {
        width: 'auto',
        maxWidth: '50%'
      }
    },
    'largeAlpha:col_12': {
      [theme.breakpoints.down(largeAlpha)]: {
        width: 'auto',
        maxWidth: '100%'
      }
    },
    // ctrl
    w_ctrl90: {
      width: 90,
      flex: '0 0 90px'
    },
    w_ctrl_left90: {
      width: 'auto',
      flex: '1 1 auto'
    },
    // display,
    d_flex: {
      display: 'flex !important'
    },
    d_inflex: {
      display: 'inline-flex !important'
    },
    d_block: {
      display: 'block !important'
    },
    d_inblock: {
      display: 'inline-block !important'
    },
    d_none: {
      display: 'none !important'
    },
    // flex
    flex_left: {
      marginRight: 'auto'
    },
    flex_right: {
      color: 'inherit'
    },
    flex_justify_start: {
      display: 'flex',
      justifyContent: 'flex-start'
    },
    flex_justify_between: {
      display: 'flex',
      justifyContent: 'between'
    },
    flex_justify_center: {
      display: 'flex',
      justifyContent: 'center'
    },
    flex_justify_end: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    flex_align_start: {
      display: 'flex',
      alignItems: 'start'
    },
    flex_align_center: {
      display: 'flex',
      alignItems: 'center'
    },
    flex_center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    justify_around: {
      justifyContent: 'space-around'
    },
    justify_between: {
      justifyContent: 'space-between'
    },
    justify_center: {
      justifyContent: 'center'
    },
    alignItems: {
      alignItems: 'stretch'
    },
    alignItemsCenter: {
      alignItems: 'center'
    },
    directionColumn: {
      flexDirection: 'column'
    },
    directionRow: {
      flexDirection: 'row'
    },
    flex_wrap: {
      flexWrap: 'wrap'
    },
    // spacing
    m_0: {
      margin: '0 !important'
    },
    my_0: {
      marginTop: '0 !important',
      marginBottom: '0 !important'
    },
    mx_0: {
      marginLeft: '0 !important',
      marginRight: '0 !important'
    },
    mt_0: {
      marginTop: '0 !important'
    },
    mt_8: {
      marginTop: '8px !important'
    },
    mt_10: {
      marginTop: '10px !important'
    },
    mt_16: {
      marginTop: '16px !important'
    },
    mt_20: {
      marginTop: '20px !important'
    },
    mt_30: {
      marginTop: '30px !important'
    },
    ml_10: {
      marginLeft: '10px !important'
    },
    ml_20: {
      marginLeft: '20px !important'
    },
    mr_10: {
      marginRight: '10px !important'
    },
    mr_16: {
      marginRight: '16px !important'
    },
    mr_20: {
      marginRight: '20px !important'
    },
    mr_auto: {
      marginRight: 'auto !important'
    },
    mb_0: {
      marginBottom: '0 !important'
    },
    mb_6: {
      marginBottom: '6px !important'
    },
    mb_10: {
      marginBottom: '10px !important'
    },
    mb_16: {
      marginBottom: '16px !important'
    },
    mb_20: {
      marginBottom: '20px !important'
    },
    mb_24: {
      marginBottom: '24px !important'
    },
    mb_40: {
      marginBottom: '40px !important'
    },
    p_0: {
      padding: '0 !important'
    },
    p_8: {
      padding: '8px !important'
    },
    p_20: {
      padding: '20px !important'
    },
    pt_20: {
      paddingTop: '20px !important'
    },
    py_5: {
      paddingTop: 5,
      paddingBottom: 5
    },
    px_0: {
      paddingLeft: '0 !important',
      paddingRight: '0 !important'
    },
    pb_0: {
      paddingBottom: '0 !important'
    },
    pb_10: {
      paddingBottom: '10px !important'
    },
    // border
    border_TL_Radius_0: {
      borderTopLeftRadius: '0px !important'
    },
    border_TR_Radius_0: {
      borderTopRightRadius: '0px !important'
    },
    border_BL_Radius_0: {
      borderBottomLeftRadius: '0px !important'
    },
    border_BR_Radius_0: {
      borderBottomRightRadius: '0px !important'
    },
    borderRadius_4: {
      borderRadius: '4px !important'
    },
    border_none: {
      border: 'none !important'
    },
    // color
    black_100: {
      color: theme.palette.text.black
    },
    black_60: {
      color: 'rgba(0, 0, 0, 0.6)'
    },
    textRed: {
      color: 'red'
    },
    textYellow: {
      color: 'yellow'
    },
    textOrange: {
      color: 'orange'
    },
    textGreen: {
      color: 'green'
    },
    textBlue: {
      color: 'blue'
    },
    textAqua: {
      color: 'aqua'
    },
    textPurple: {
      color: 'purple'
    },
    // utilities
    scrollable_y: {
      height: '100%',
      overflowY: 'auto'
    },
    // font
    fz_12: {
      fontSize: 12
    },
    fz_14: {
      fontSize: 14
    },
    fz_16: {
      fontSize: 16
    },
    // Icons
    viewBtn: {
      width: 36,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 10,
      cursor: 'pointer'
    },
    viewIcon: {
      fontSize: 16,
      color: theme.palette.customColor.themePrimary
    },
    // components
    pageContainer: {
      position: 'relative',
      padding: '0 20px 20px'
    },
    rowRadioGroup: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    rowRadioGroupLabel: {
      color: theme.palette.text.black,
      fontSize: 14,
      marginRight: 25
    },
    radioRoot: {
      '& .MuiSvgIcon-root': {
      // 可以調整寬高
        height: 20,
        width: 20
      }
    },
    checkboxRoot: {
      '& .MuiSvgIcon-root': {
      // 可以調整寬高
        height: 20,
        width: 20
      }
    },
    defaultInput: {
      maxWidth: 200,
      minWidth: 150,
      maxHeight: 40,
      '& .MuiOutlinedInput-root': {
        height: 40
      }
    },
    unlimitWidthInput: {
      maxHeight: 40,
      '& .MuiOutlinedInput-root': {
        height: 40
      },

      '& .MuiInputLabel-outlined': {
        transform: 'translate(14px, 14px) scale(1)'
      },

      '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
        transform: 'translate(14px, -6px) scale(0.75)'
      }
    },
    unlimitWidthSelect: {
      maxHeight: 40,
      height: 40,

      '& .MuiSelect-outlined': {
        padding: '12px 14px',
        paddingRight: 32
      },

      '& .MuiSelect-icon': {
        top: 'calc(50% - 8px)'
      },

      '& .MuiFormLabel-root': {
        transform: 'translate(14px, 14px) scale(1)'
      },

      '& .MuiFormLabel-root.MuiInputLabel-shrink': {
        transform: 'translate(14px, -6px) scale(0.75)'
      }
    },
    ctrlBarDatePicker: {
      width: 200,
      backgroundColor: theme.palette.customColor.trans
    },
    tabs: {
      '& .MuiTab-wrapper': {
        fontSize: '14px'
      }
    },
    defaultTextField: {
      '& .MuiFormHelperText-root': {
        fontSize: '14px'
      }
    }
  }
};

export default commonStyle;