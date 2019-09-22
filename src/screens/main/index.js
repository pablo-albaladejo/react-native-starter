import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import MainLayout from '../../layout/main';

const navigate = () => {
  alert('navigate')
}

const App = () => (
  <MainLayout>
    <View style={styles.container}>
      <TouchableOpacity onPress={navigate}>
        <Text>{'Navigate'}</Text>
      </TouchableOpacity>
    </View>
  </MainLayout>
);

export default App;
