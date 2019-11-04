import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layouts/main';
import BasicButton from '../../components/inputs/BasicButton';

class SecondaryScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title,
    };
  };

  navigate = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <MainLayout>
        <View style={styles.container}>
          <BasicButton
            caption={'Back'}
            onPress={this.navigate}
          />
        </View>
      </MainLayout>
    )
  }

}

SecondaryScreen.propTypes = {
  navigation: PropTypes.object,
}

export default SecondaryScreen;
