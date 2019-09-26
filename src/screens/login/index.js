import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layout/main';

class LoginScreen extends Component {

  navigate = () => {
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <MainLayout>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.navigate}>
            <Text>{'Login'}</Text>
          </TouchableOpacity>
        </View>
      </MainLayout>
    )
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object,
}

export default LoginScreen;
