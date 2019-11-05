
import { StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 8
  },
  content: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: GlobalStyles.main.foregroundColor,
    ...GlobalStyles.shadow
  }
});
