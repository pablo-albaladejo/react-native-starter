import { connect } from 'react-redux'

import SettingsScreen from './stateless';
import { userLogout } from '../../redux/actions/auth';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
