import React from 'react'
import { connect } from 'react-redux'
import browserHistory from "react-router/lib/browserHistory";
import {isEmpty, get} from 'lodash'
import Link from 'react-router/lib/Link'
import RaisedButton from 'material-ui/RaisedButton';
import {userInfo} from '../actions/userList'

const styles = {
  icon:{
    fill:'#fc7f94'
  },
  label:{
    fontWeight:100
  },
  underlineFocusStyle: {
    borderColor: '#fc7f94'
  },
  backgroundColor: {
    backgroundColorColor: '#fc7f94'
  },
  inputStyle: {
    fontFamily: 'Roboto Condensed',
    width:'100%'
  }
}

class Users extends React.Component {
  state = {
    userListStartIndex:0,
    userListEndIndex:0,
    userList: []
  }
  componentDidMount = async()=> {
    const userId = get(this.props, 'params.id',0)
    userId && await this.userData(userId)
  }

  userData(userId){
    fetch(`https://5b795e7cfb11c8001453625c.mockapi.io/api/v1/users/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(data => {
        this.props.userInfo(data)
      });
  }


  render () {
    return !isEmpty(this.props.user) && <div className="col-xs-12 box-shadow user-detail" id="user-detail">
        <div className="col-xs-12 col-md-2">
          <img className="pl-5 pr-5" src={this.props.user.avatar}/>
        </div>
        <div className="col-xs-12 col-md-10 p-0">
          <div className="col-xs-12 p-0">
            <div  className="col-xs-3 p-0">Name: </div>
            <div  className="col-xs-9">{this.props.user.first_name+' '+ this.props.user.last_name}</div>
          </div>
          <div className="col-xs-12 p-0">
            <div  className="col-xs-3  p-0">Gender: </div>
            <div  className="col-xs-9">{parseInt(this.props.user.gender) ? 'Male' : 'Female'}</div>
          </div>
          <div className="col-xs-12 p-0">
            <div  className="col-xs-3  p-0">DOB: </div>
            <div  className="col-xs-9">{this.props.user.dob}</div>
          </div>
          <div className="col-xs-12 p-0">
            <div  className="col-xs-3  p-0">Email: </div>
            <div  className="col-xs-9">{this.props.user.email}</div>
          </div>
          <div className="col-xs-12 p-0">
            <div  className="col-xs-3  p-0">Mobile: </div>
            <div  className="col-xs-9">{this.props.user.mobile}</div>
          </div>
          <div className="col-xs-10 p-0">
            <div  className="col-xs-3 p-0">Created At: </div>
            <div  className="col-xs-9">{this.props.user.createdAt}</div>
          </div>



        </div>


      </div>

  }
}


function mapStateToProps (state) {
  return {
    userToken : state.userToken,
    user : !isEmpty(state.userInfo) ? state.userInfo : {}


  }
}
function mapDispatchToProps (dispatch) {
  return {
    userInfo: (users) => {
      return dispatch(userInfo(users))
    }

  }
}
export { Users }
export default connect(mapStateToProps, mapDispatchToProps)(Users)
