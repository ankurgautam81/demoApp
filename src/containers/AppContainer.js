import React from "react";
import { connect } from "react-redux";
import ShellContainer from "../containers/ShellContainer";
import { setClient } from "../actions/common";
import { isMobileBrowser } from "../helpers/user_agent";

class App extends React.Component {

  async componentDidMount () {
    await this.props.setClient(isMobileBrowser() ? 1 : 0)
  }

  render() {
    return (
      <ShellContainer>
        <div className="col-xs-12">
          {this.props.children}
        </div>
      </ShellContainer>
    )
  }
}
function mapStateToProps(state) {
  return {
    isMobile: state.isClientOnMobile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setClient: (isMobile) => {
      return dispatch(setClient(isMobile))
    }
  }
}

export { App }
export default connect(mapStateToProps, mapDispatchToProps)(App)
