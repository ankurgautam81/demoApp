import React from 'react'
import { connect } from 'react-redux'
import browserHistory from "react-router/lib/browserHistory";
import {isEmpty, get} from 'lodash'
import RaisedButton from 'material-ui/RaisedButton';
import {usersList} from '../actions/userList'

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

class HomeContainer extends React.Component {
  state = {
    userListPage : 1,
  }
  componentDidMount () {
    // /isEmpty(this.props.userToken) && browserHistory.push('login')
    this.usersData(this.state.userListPage)
  }

  usersData(pageIndex){

     fetch(`https://5b795e7cfb11c8001453625c.mockapi.io/api/v1/usersPage${pageIndex}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(data => {
        this.props.usersList(data)
      });
  }


  render () {
    return !isEmpty(this.props.users) && <div className="col-xs-12" id="user-home">
        <div className="col-xs-12 user-info list-header">
          <div className="col-xs-1">Avtar</div>
          <div className="col-xs-1">First Name </div>
          <div className="col-xs-1">Last Name </div>
          <div className="col-xs-1">Gender </div>
          <div className="col-xs-1">Age</div>
          <div className="col-xs-2">Email </div>
          <div className="col-xs-2">Contact</div>
          <div className="col-xs-1">Edit</div>
          <div className="col-xs-1">Delete</div>
        </div>
        {
          this.props.users.map((user, index)=>{
            return <div key={index} className="col-xs-12 user-info">
              <div className="col-xs-1"><img className="pl-5 pr-5" src={user.avatar} height={30} width={40}/></div>
              <div className="col-xs-1">{user.first_name} </div>
              <div className="col-xs-1">{user.last_name} </div>
              <div className="col-xs-1">{parseInt(user.gender) ? 'Male' : 'Female'} </div>
              <div className="col-xs-1">{user.dob} </div>
              <div className="col-xs-2">{user.email} </div>
              <div className="col-xs-2">{user.mobile} </div>
              <div className="col-xs-1">
                <i className="fa fa-pencil-square-o" aria-hidden="true" />
              </div>
              <div className="col-xs-1"><i className="fa fa-trash" aria-hidden="true" /></div>
            </div>
          })
        }

        <div className="col-xs-12 text-center font-white">
          <div className="col-xs-6">
            <RaisedButton
              backgroundColor="#fc7f94"
              style={{color:'#ffffff'}}
              disabledBackgroundColor="#E5E5E5"
              disabledLabelColor="#CACACA"
              rippleStyle={{opacity: 0.5}}
              onClick={()=>this.loginUser()}>
              <i className="fa fa-chevron-left" aria-hidden="true"/> Prev
            </RaisedButton>
          </div>
          <div className="col-xs-6">
            <RaisedButton backgroundColor="#fc7f94"
                          style={{color:'#ffffff'}}
                          disabledBackgroundColor="#E5E5E5"
                          disabledLabelColor="#CACACA"
                          rippleStyle={{opacity: 0.5}}
                          onClick={()=>this.loginUser()}>
              Next <i className="fa fa-chevron-right" aria-hidden="true"/>
            </RaisedButton>
          </div>
        </div>
      </div>

  }
}


function mapStateToProps (state) {
  return {
    userToken : state.userToken,
    users : !isEmpty(state.users) ? state.users : []


  }
}
function mapDispatchToProps (dispatch) {
  return {
    usersList: (users) => {
      return dispatch(usersList(users))
    }

  }
}
export { HomeContainer }
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
