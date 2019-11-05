import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Card = ({ children }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      {children}
    </View>
  </View>
)
Card.propTypes = {
  children: PropTypes.object.isRequired,
}
export default Card;
