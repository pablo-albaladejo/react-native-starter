import { connect } from 'react-redux';
import Toast from './stateless';
import { onToastClose } from '../../../redux/actions/ui/toast.js';

const mapStateToProps = state => ({
  visible: state.ui.toast.visible,
  data: state.ui.toast.data
})

const mapDispatchToProps = dispatch => ({
  onToastClose: (cb) => dispatch(onToastClose(cb))
});

export default connect(mapStateToProps, mapDispatchToProps)(Toast)
