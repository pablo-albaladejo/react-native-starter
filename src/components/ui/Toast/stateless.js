import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { GlobalStyles } from '../../../styles';

import Toast from 'react-native-root-toast';

//TO BE REMOVED
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);

export class SimpleToast extends Component {
  render() {
    const { data: { duration = 3000, position = -20 } } = this.props;

    return (
      <View>
        {this.props.visible &&
          <Toast
            position={position}
            visible={this.props.visible}
            onShow={() => setTimeout(() => this.props.onToastClose(this.props.data.onClose), duration)}
            hideOnPress={false}
            backgroundColor={GlobalStyles.main.fade}
          >
            {this.props.data.text}
          </Toast>
        }
      </View>
    );
  }
}
SimpleToast.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    duration: PropTypes.number,
    position: PropTypes.number,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
  onToastClose: PropTypes.func.isRequired,
}
export default SimpleToast;

