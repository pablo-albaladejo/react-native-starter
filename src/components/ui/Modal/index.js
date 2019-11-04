import { connect } from 'react-redux';
import SuperModal from './stateless';
import { onModalClose } from '../../../redux/actions/ui/modal.js';

const mapStateToProps = state => ({
  visible: state.ui.modal.visible,
  type: state.ui.modal.type,
  data: state.ui.modal.data
})

const mapDispatchToProps = dispatch => ({
  onModalClose: (cb) => dispatch(onModalClose(cb))
});

export default connect(mapStateToProps, mapDispatchToProps)(SuperModal)
