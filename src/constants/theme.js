import { fade } from 'material-ui/utils/colorManipulator'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  grey400,
  cyan500,
  grey700,
  darkBlack,
  white,
  pinkA200,
  grey100,
  grey300,
  fullBlack,
  grey500,
  pinkA100
} from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  spacing:{
    iconSize:18
  },
  palette: {
    primary1Color: white,
    primary2Color: white,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: grey700,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  raisedButton: {
    textColor: white,
  },
  appBar: {
    height: 56
  },
  toolbar: {
    backgroundColor: white
  },
  svgIcon: {
    color: grey700
  },
  datePicker: {
    color: '#f16d85',
    calendarTextColor: darkBlack,
    selectColor: '#f16d85',
    selectTextColor: grey700,
    calendarYearBackgroundColor: white,
  },
  flatButton: {
    primaryTextColor: '#f16d85',
    secondaryTextColor: '#f16d85',
  },
}, {
  avatar: {
    borderColor: null,
  },
  userAgent: 'all',
})

export default muiTheme