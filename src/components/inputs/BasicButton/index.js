import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import { Pallete, STYLE_LEVEL, Colors } from '../../../styles';

class BasicButton extends Component {
  getStyledButton = (flavour) => {
    return {
      backgroundColor: Pallete[flavour || STYLE_LEVEL.PRIMARY]
    }
  }

  getStyledText = (flavour) => {
    const level = flavour || STYLE_LEVEL.PRIMARY;
    switch (level) {
      case STYLE_LEVEL.PRIMARY:
      case STYLE_LEVEL.SUCCESS:
      case STYLE_LEVEL.DANGER:
      case STYLE_LEVEL.DARK:
        return {
          color: Colors.white
        }
    }
  }

  render() {
    const { caption, onPress, flavour } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.container, this.getStyledButton(flavour)]}>
        <Text style={[styles.text, this.getStyledText(flavour)]}>{caption}</Text>
      </TouchableOpacity>
    )
  }
}

BasicButton.propTypes = {
  caption: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  flavour: PropTypes.string,
}

export default BasicButton;
