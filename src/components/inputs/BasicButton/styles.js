import { StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    margin: 8,
    borderRadius: 4,
  },

  text: {
    ...GlobalStyles.text,
  }
});
