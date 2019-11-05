import { connect } from 'react-redux'

import Loading from './stateless.js'

const mapStateToProps = state => ({
  isLoading: Object.keys(state.loading).length > 0
})

export default connect(mapStateToProps, null)(Loading)
