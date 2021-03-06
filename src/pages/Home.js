import React from 'react'
import { connect } from 'react-redux'
import browserHistory from "react-router/lib/browserHistory";
import {isEmpty, get, slice, split} from 'lodash'
import Link from 'react-router/lib/Link'
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
    userListStartIndex:0,
    userListEndIndex:19,
    userList: []
  }
  componentDidMount = async()=> {
    isEmpty(localStorage.getItem("token")) && browserHistory.push('login')
    await this.usersData(this.state.userListPage)
  }

  usersData(){
     fetch(`https://5b795e7cfb11c8001453625c.mockapi.io/api/v1/users`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(data => {
        this.props.usersList(data)
        this.setState({
          userList: slice(data, this.state.userListStartIndex,this.state.userListEndIndex)
        })
      });
  }
  deleteUser = (id) =>{
    fetch(`https://5b795e7cfb11c8001453625c.mockapi.io/api/v1/users/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(data => {
        this.usersData(this.state.userListPage)
      });

  }

  userArray = (type) =>{

      this.setState({
        userListStartIndex: type === 'next' ? parseInt(this.state.userListStartIndex) + 19 : parseInt(this.state.userListStartIndex) - 19,

        userListEndIndex : type === 'next' ? parseInt(this.state.userListEndIndex) + 19 : parseInt(this.state.userListEndIndex) - 19,
      },()=>{
        this.setState({
          userList: slice(this.props.users, this.state.userListStartIndex,this.state.userListEndIndex)
        })
      })

  }


  render () {
    return !isEmpty(this.state.userList) && <div className="col-xs-12 p-0" id="user-home">
        <div className="col-xs-12 text-center">User List</div>
        <div className="col-xs-12 user-info  text-center list-header hidden-xs hidden-sm">
          <div className="col-xs-10 p-0">
            <div className="col-xs-2">Avtar</div>
            <div className="col-xs-1">First Name </div>
            <div className="col-xs-1">Last Name </div>
            <div className="col-xs-1">Gender </div>
            <div className="col-xs-2">Age</div>
            <div className="col-xs-2">Email </div>
            <div className="col-xs-2">Contact</div>
          </div>
          <div className="col-xs-1">Edit</div>
          <div className="col-xs-1">Delete</div>
        </div>
        {
          this.state.userList.map((user, index)=>{
            const d = new Date();
            const currentYear = d.getFullYear()
            const birthYear = split(user.dob, '-',1).toString();
            const AGE = parseInt(currentYear) - parseInt(birthYear)

            return <div key={index} className="col-xs-12 user-info text-center p-0">
              <Link to={`/user/${user.id}`}>
              <div className="col-xs-12 col-sm-10 p-0">
                  <div className="col-xs-12 col-md-2 col-lg-2 p-0 text-center"><img style={{margin:'auto'}} className="pl-5 pr-5 img-responsive" src={user.avatar}/></div>
                <div className="col-xs-4 hidden-lg hidden-md p-0 text-right">First Name: </div>
                <div className="col-xs-6 col-md-1 col-lg-1 p-0">{user.first_name} </div>
                <div className="col-xs-4 hidden-lg hidden-md p-0 text-right">Last Name: </div>
                  <div className="col-xs-6 col-md-1 col-lg-1 p-0">{user.last_name} </div>
                <div className="col-xs-4 hidden-lg hidden-md p-0 text-right">Gender: </div>
                  <div className="col-xs-6 col-md-1 col-lg-1 p-0">{parseInt(user.gender) ? 'Male' : 'Female'} </div>
                <div className="col-xs-4 hidden-lg hidden-md p-0 text-right">Age: </div>
                  <div className="col-xs-6 col-md-2 col-lg-2 p-0">{AGE} </div>
                <div className="col-xs-4 hidden-lg hidden-md p-0 text-right">Email: </div>
                  <div className="col-xs-6 col-md-2 col-lg-2 p-0">{user.email} </div>
                <div className="col-xs-4 hidden-lg hidden-md p-0 text-right">Mobile: </div>
                  <div className="col-xs-6 col-md-2 col-lg-2 p-0">{user.mobile} </div>

              </div>
              </Link>
              <Link to={`/add-edit-user?userId=${user.id}`}>
                <div className="col-xs-6 col-md-1 col-lg-1">
                  <i className="fa fa-pencil-square-o" aria-hidden="true" />
                </div>
              </Link>

              <div className="col-xs-6 col-md-1 col-lg-1" onClick={()=>{this.deleteUser(user.id)}}><i className="fa fa-trash" aria-hidden="true" /></div>
            </div>
          })
        }

        <div className="col-xs-12 text-center font-white">
          <div className="col-xs-6">
            <RaisedButton
              backgroundColor="#fc7f94"
              style={{color:'#ffffff'}}
              disabled={this.state.userListStartIndex === 0}
              disabledBackgroundColor="#E5E5E5"
              disabledLabelColor="#CACACA"
              rippleStyle={{opacity: 0.5}}
              onClick={()=>this.userArray('prev')}>
              <i className="fa fa-chevron-left" aria-hidden="true"/> Prev
            </RaisedButton>
          </div>
          <div className="col-xs-6">
            <RaisedButton backgroundColor="#fc7f94"
                          style={{color:'#ffffff'}}
                          disabled={this.state.userListEndIndex >= this.props.users.length}
                          disabledBackgroundColor="#E5E5E5"
                          disabledLabelColor="#CACACA"
                          rippleStyle={{opacity: 0.5}}
                          onClick={()=>this.userArray('next')}>
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
