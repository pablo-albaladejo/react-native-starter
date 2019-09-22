import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layout/main';

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
          <TouchableOpacity onPress={this.navigate}>
            <Text>{'Back'}</Text>
          </TouchableOpacity>
        </View>
      </MainLayout>
    )
  }

}

SecondaryScreen.propTypes = {
  navigation: PropTypes.object,
}

export default SecondaryScreen;
