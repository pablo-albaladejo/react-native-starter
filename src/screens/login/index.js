
import { connect } from 'react-redux'

import LoginScreen from './stateless';
import { userLogin } from '../../redux/actions/auth';

const mapDispatchToProps = dispatch => ({
  userLogin: (userID, password) => dispatch(userLogin({userID, password}))
});

const mapStateToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
