import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layout/main';

class MainScreen extends Component {

  navigate = () => {
    this.props.navigation.navigate('Secondary', { title: 'Secondary' });
  }

  showModal = () => {
    this.props.onModalOpen(
      'Dialog',
      {text: 'This is a modal'});
  }

  render() {
    return (
      <MainLayout>
        <View style={styles.container}>

          <TouchableOpacity onPress={this.navigate}>
            <Text>{'Navigate'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.showModal}>
            <Text>{'Modal'}</Text>
          </TouchableOpacity>

        </View>
      </MainLayout>
    )
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.object,
}

export default MainScreen;
