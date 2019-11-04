import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layouts/main';

class SettingsScreen extends Component {

  navigate = () => {
    this.props.userLogout();
  }

  render() {
    return (
      <MainLayout>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.navigate}>
            <Text>{'Logout'}</Text>
          </TouchableOpacity>
        </View>
      </MainLayout>
    )
  }
}

SettingsScreen.propTypes = {
  userLogout: PropTypes.func.isRequired,
}

export default SettingsScreen;
