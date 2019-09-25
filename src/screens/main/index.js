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

  render() {
    return (
      <MainLayout>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.navigate}>
            <Text>{'Navigate'}</Text>
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
