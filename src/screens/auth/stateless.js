import React from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class AuthLoadingScreen extends React.Component {

  componentDidMount = () => {
    this.props.navigation.navigate(this.props.jwt ? 'Main' : 'Auth');
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
}

AuthLoadingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  jwt: PropTypes.string
}

export default AuthLoadingScreen;
