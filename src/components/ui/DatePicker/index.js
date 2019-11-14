
import { connect } from 'react-redux';
import DatePicker from './stateless';
import { onDatePickerClose } from '../../../redux/actions/ui/datepicker';

const mapStateToProps = state => ({
  visible: state.ui.datepicker.visible,
  data: state.ui.datepicker.data
})

const mapDispatchToProps = dispatch => ({
  onDatePickerClose: (cb) => dispatch(onDatePickerClose(cb))
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker)
