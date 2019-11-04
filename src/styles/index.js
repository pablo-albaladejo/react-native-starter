import { PixelRatio } from 'react-native';
const BASE_FONT_SIZE = 14 * PixelRatio.getFontScale();
export const FONT_SIZE = {
  H1: BASE_FONT_SIZE * 2 / Math.sqrt(1),
  H2: BASE_FONT_SIZE * 2 / Math.sqrt(2),
  H3: BASE_FONT_SIZE * 2 / Math.sqrt(3),
  H4: BASE_FONT_SIZE * 2 / Math.sqrt(4),
  H5: BASE_FONT_SIZE * 2 / Math.sqrt(5),
  H6: BASE_FONT_SIZE * 2 / Math.sqrt(6),
  P: BASE_FONT_SIZE * 2 / Math.sqrt(4),
}

export const STYLE_LEVEL = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  DANGER: 'DANGER',
  INFO: 'INFO',
  LIGHT: 'LIGHT',
  DARK: 'DARK'
}

export const Colors = {
  white: '#ffffff',
  black: '#23282c',
  noir: '#2f353a',
  blue: '#20a8d8',
  lightBlue: '#63c2de',
  grey: '#c8ced3',
  lightGrey: '#f0f3f5',
  green: '#4dbd74',
  yellow: '#ffc107',
  red: '#f86c6b',
  purple52: 'rgba(32, 25, 27, 0.52)'
}

export const Pallete = {
  [STYLE_LEVEL.PRIMARY]: Colors.blue,
  [STYLE_LEVEL.SECONDARY]: Colors.grey,
  [STYLE_LEVEL.SUCCESS]: Colors.green,
  [STYLE_LEVEL.WARNING]: Colors.yellow,
  [STYLE_LEVEL.DANGER]: Colors.red,
  [STYLE_LEVEL.INFO]: Colors.lightBlue,
  [STYLE_LEVEL.LIGHT]: Colors.lightGrey,
  [STYLE_LEVEL.DARK]: Colors.noir,
}

export const GlobalStyles = {
  text: {
    color: Colors.black,
    fontSize: FONT_SIZE.P,
  },
  main: {
    backgroundColor: Colors.white,
    fade: Colors.purple52
  },
  modal: {
    padding: 8,
    backgroundColor: Colors.white,
    borderRadius: 8,
    width: '84%',
  },
}
