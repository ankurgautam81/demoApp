import React from 'react'
import { connect } from 'react-redux'
import browserHistory from "react-router/lib/browserHistory";
import {isEmpty, get} from 'lodash'

class HomeContainer extends React.Component {
  componentDidMount () {
    isEmpty(this.props.userToken) && browserHistory.push('login')
  }

  componentWillUnmount () {

  }

  render () {
    return (
      <div>Home</div>
    )
  }
}


function mapStateToProps (state) {
  return {
    userToken : state.userToken


  }
}
function mapDispatchToProps (dispatch) {
  return {

  }
}
export { HomeContainer }
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
