import { connect } from 'react-redux'

import AuthLoadingScreen from './stateless';

const mapStateToProps = state => ({
  jwt: state.auth.jwt
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
