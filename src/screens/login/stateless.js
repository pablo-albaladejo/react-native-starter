import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layouts/main';
import { TextInput } from 'react-native-gesture-handler';

import * as IconHelper from '../../helpers/icons';
import BasicButton from '../../components/inputs/BasicButton';

class LoginScreen extends Component {

  state = {
    username: null,
    password: null,
  }

  onLoginPress = () => {
    this.props.userLogin('user_userID', 'user_password');
  }

  render() {
    return (
      <MainLayout>
        <View style={styles.container}>

          <View style={styles.input}>
            <View style={styles.icon}>
              {IconHelper.getIcon('person', 'blue')}
            </View>
            <TextInput
              placeholder={'username'}
              onChangeText={(text) => { this.setState({ username: text }) }}
            />
          </View>

          <View style={styles.input}>
            <View style={styles.icon}>
              {IconHelper.getIcon('lock', 'blue')}
            </View>
            <TextInput
              secureTextEntry={true}
              placeholder={'passwrod'}
              onChangeText={(text) => { this.setState({ password: text }) }}
            />
          </View>

          <BasicButton
            caption={'Login'}
            onPress={this.onLoginPress}
          />

        </View>
      </MainLayout>
    )
  }
}

LoginScreen.propTypes = {
  userLogin: PropTypes.func.isRequired
}

export default LoginScreen;
