import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layouts/main';
import { MODAL_TYPES } from '../../components/ui/Modal/types';
import BasicButton from '../../components/inputs/BasicButton';
import Card from '../../components/containers/card';

class MainScreen extends Component {

  navigate = () => {
    this.props.navigation.navigate('Secondary', { title: 'Secondary' });
  }

  navigateTabsView = () => {
    this.props.navigation.navigate('Tabs', { title: 'TabsView' });
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

  showToast = () => {
    this.props.onToastOpen(
      {
        text: 'This is a toast',
        onClose: () => console.log('close'),
      }
    );
  }

  render() {
    return (
      <MainLayout>
        <View style={styles.container}>

          <Card>
            <BasicButton
              caption={'Navigate'}
              onPress={this.navigate}
            />

            <BasicButton
              caption={'TabsView'}
              onPress={this.navigateTabsView}
            />

            <BasicButton
              caption={'Modal'}
              onPress={this.showModal}
            />

            <BasicButton
              caption={'Toast'}
              onPress={this.showToast}
            />
          </Card>

        </View>
      </MainLayout>
    )
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.object,
  onModalOpen: PropTypes.func,
  onToastOpen: PropTypes.func
}

export default MainScreen;
