import { StyleSheet } from 'react-native';
import { GlobalStyles } from '../../styles';

export default StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: GlobalStyles.main.backgroundColor
  },
  content:{
    flexGrow: 1,
    backgroundColor: GlobalStyles.main.backgroundColor
  }
});
