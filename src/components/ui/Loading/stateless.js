import React from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';
import styles from './styles';

import PropTypes from 'prop-types';
import { Pallete, STYLE_LEVEL } from '../../../styles';

const Loading = ({ isLoading }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={isLoading}
  >
    <View style={styles.container}>

    <ActivityIndicator size="large" color={Pallete[STYLE_LEVEL.SECONDARY]} />

    </View>
  </Modal>
)

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default Loading;
