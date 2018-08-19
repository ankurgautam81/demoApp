import React from "react";
import { connect } from "react-redux";
import DesktopNavBar from "../components/DesktopNavBar"
import "../assets/index.css"

class ShellContainer extends React.Component {

  state = {
  }

  componentDidMount() {
  }

  render() {
    const navigation = this.props.children.props.children.props
    return (
      <div id="shell-container" className="col-xs-12">
        {
          navigation.location.pathname !== '/login' &&  <DesktopNavBar/>
        }
        <div className="col-xs-12 child-container p-0">
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isMobile: state.isClientOnMobile
  }
}

function mapDispatchToProps(dispatch) {
  return { }
}

export { ShellContainer }
export default connect(mapStateToProps, mapDispatchToProps)(ShellContainer)