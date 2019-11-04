import { connect } from 'react-redux';
import stateless from './stateless'
import { onModalOpen } from '../../redux/actions/ui/modal';

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
  onModalOpen: (type, data) => dispatch(onModalOpen(type, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(stateless)
