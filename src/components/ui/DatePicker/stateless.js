import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ModalDatePicker from 'react-native-datepicker-modal';

class DatePicker extends Component {
  render() {
    return (
      <ModalDatePicker
        startDate={this.props.data.date}
        show={this.props.visible}
        onClose={this.props.onDatePickerClose}
        onDateChanged={(date) => console.log(date)}
      />
    )
  }
}

DatePicker.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.object,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
  onDatePickerClose: PropTypes.func.isRequired,
}

export default DatePicker
