import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layouts/main';
import BasicButton from '../../components/inputs/BasicButton';

class SettingsScreen extends Component {

  navigate = () => {
    this.props.userLogout();
  }

  render() {
    return (
      <MainLayout>
        <View style={styles.container}>
          <BasicButton
            caption={'Logout'}
            onPress={this.navigate}
          />
        </View>
      </MainLayout>
    )
  }
}

SettingsScreen.propTypes = {
  userLogout: PropTypes.func.isRequired,
}

export default SettingsScreen;
