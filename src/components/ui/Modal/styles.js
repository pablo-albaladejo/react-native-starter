import {
  StyleSheet
} from 'react-native';
import { GlobalStyles, FONT_SIZE } from '../../../styles';

export default StyleSheet.create({
  superModalContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.main.fade,
  },
  superModalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },

  container: {
    ...GlobalStyles.modal,
    alignItems: 'center',
    justifyContent: 'center'
  },

  content: {
    width: '100%',
  },

  titleContainer: {
    padding: 8,
  },
  title: {
    ...GlobalStyles.text,
    fontSize: FONT_SIZE.H1
  },

  textContainer:{
    padding: 8
  },
  text: {
    ...GlobalStyles.text,
  },

  footer: {
    flexDirection: 'row',

  },

  button: {
    flex: 1,
  }

})
