import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layouts/main';
import { MODAL_TYPES } from '../../components/ui/Modal/types';

class MainScreen extends Component {

  navigate = () => {
    this.props.navigation.navigate('Secondary', { title: 'Secondary' });
  }

  showModal = () => {
    this.props.onModalOpen(
      MODAL_TYPES.DIALOG,
      {
        title: 'This is a title',
        text: 'This is a text',
        onSubmit: () => console.log('submit'),
        onClose: () => console.log('close'),
      }
    );
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
  onModalOpen: PropTypes.func
}

export default MainScreen;
