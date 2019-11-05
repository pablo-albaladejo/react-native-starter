import { connect } from 'react-redux';
import stateless from './stateless'
import { onModalOpen } from '../../redux/actions/ui/modal';
import { onToastOpen } from '../../redux/actions/ui/toast';

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
  onModalOpen: (type, data) => dispatch(onModalOpen(type, data)),
  onToastOpen: (data) => dispatch(onToastOpen(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(stateless)
