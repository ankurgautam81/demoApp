import React from 'react'
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField';
import browserHistory from "react-router/lib/browserHistory";
import {isEmpty, get} from 'lodash'
import Link from 'react-router/lib/Link'
import RaisedButton from 'material-ui/RaisedButton';
import {userInfo} from '../actions/userList'
const hosturl = 'https://5b795e7cfb11c8001453625c.mockapi.io/api/v1/users'

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

class AddEditUser extends React.Component {
  state = {
    userListStartIndex:0,
    userListEndIndex:0,
    userList: []
  }
  componentDidMount = async()=> {
    const userId = get(this.props, 'location.query.userId',0)
    userId && await this.userData(userId)
  }

  userData = async(userId) =>{
    await fetch(`https://5b795e7cfb11c8001453625c.mockapi.io/api/v1/users/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(data => {
        this.props.userInfo(data)
        this.setState({
          fname:data.first_name,
          lname:data.last_name,
          email:data.email,
          dob:data.dob,
          mobile:data.mobile,
          gender:data.gender,



        })
      });

  }

  addUser(isUserAdd){
    const url = isUserAdd ? hosturl : hosturl+'/'+parseInt(this.props.location.query.userId)
    console.log('url ==',url)
    const method = isUserAdd ? 'POST' : 'PUT'
    if( this.state.mobile && this.state.gender && !isEmpty(this.state.email) && !isEmpty(this.state.fname) && !isEmpty(this.state.lname) && !isEmpty(this.state.dob)){

      fetch(url, {
        method: method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          mobile:this.state.mobile,
          email:this.state.email,
          first_name:this.state.fname,
          last_name:this.state.lname,
          gender:this.state.gender,
          dob:this.state.dob
        })
      }).then(response => response.json())
        .then(data => {
          console.log(data)
        });

    }else {
      console.log('********')
    }



  }

  onInputChange = (value, key) => {
    this.setState({
      [key]: value,
    });
  }


  render () {
    return (get(this.props, 'location.query.userId',0) && !isEmpty(this.props.user))  ? <div className="col-xs-offset-2 col-xs-8 box-shadow text-center paddingTopBottom-20" id="user-detail">
      <div className="col-xs-12 p-0" >EDIT USER</div>
        <div className="col-xs-12 p-0" >
          <TextField
            id="edit-user-fname"
            hintText="First Name"
            underlineFocusStyle={styles.underlineFocusStyle}
            value={this.state.fname}
            onChange={event => this.onInputChange(event.target.value, 'fname')}

          />
        </div>
        <div className="col-xs-12 p-0" >
          <TextField
            id="edit-user-lname"
            hintText="Last Name"
            underlineFocusStyle={styles.underlineFocusStyle}
            onChange={event => this.onInputChange(event.target.value, 'lname')}
            value={this.state.lname}
          />
        </div>
        <div className="col-xs-12 p-0" >
          <TextField
            id="edit-user-mobile"
            hintText="Mobile"
            underlineFocusStyle={styles.underlineFocusStyle}
            type="number"
            onChange={event => this.onInputChange(event.target.value, 'mobile')}
            value={this.state.mobile}
          />
        </div>
        <div className="col-xs-12 p-0" >
          <TextField
            id="edit-user-email"
            hintText="Email"
            underlineFocusStyle={styles.underlineFocusStyle}
            onChange={event => this.onInputChange(event.target.value, 'email')}
            type="email"
            value={this.state.email}
          />
        </div>
      <div className="col-xs-12 p-0" >
        <TextField
          id="edit-user-gender"
          hintText="Gender"
          underlineFocusStyle={styles.underlineFocusStyle}
          onChange={event => this.onInputChange(event.target.value, 'gender')}
          value={this.state.gender}
        />
      </div>
      <div className="col-xs-12 p-0" >
        <TextField
          id="edit-user-dob"
          underlineFocusStyle={styles.underlineFocusStyle}
          onChange={event => this.onInputChange(event.target.value, 'dob')}
          type="date"
          value={this.state.dob}
        />
      </div>
      <div className="col-xs-12">
        <RaisedButton backgroundColor="#fc7f94"
                      style={{color:'#ffffff'}}
                      disabledBackgroundColor="#E5E5E5"
                      disabledLabelColor="#CACACA"
                      rippleStyle={{opacity: 0.5}}
                      onClick={()=>this.addUser(false)}>
          Submit
        </RaisedButton>
      </div>

      </div>
      :<div className="col-xs-offset-2 col-xs-8 box-shadow text-center paddingTopBottom-20" id="user-detail">
        <div className="col-xs-12 p-0" >ADD USER</div>
        <div className="col-xs-12 p-0" >
          <TextField
            id="user-fname"
            hintText="First Name"
            underlineFocusStyle={styles.underlineFocusStyle}
            onChange={event => this.onInputChange(event.target.value, 'fname')}
          />
        </div>
        <div className="col-xs-12 p-0" >
          <TextField
            id="user-lname"
            hintText="Last Name"
            underlineFocusStyle={styles.underlineFocusStyle}
            onChange={event => this.onInputChange(event.target.value, 'lname')}
          />
        </div>
        <div className="col-xs-12 p-0" >
          <TextField
            id="user-mobile"
            hintText="Mobile"
            underlineFocusStyle={styles.underlineFocusStyle}
            type="number"
            onChange={event => this.onInputChange(event.target.value, 'mobile')}
          />
        </div>
        <div className="col-xs-12 p-0" >
          <TextField
            id="user-email"
            hintText="Email"
            underlineFocusStyle={styles.underlineFocusStyle}
            onChange={event => this.onInputChange(event.target.value, 'email')}
            type="email"
          />
        </div>
        <div className="col-xs-12 p-0" >
          <TextField
            id="user-gender"
            hintText="Gender"
            underlineFocusStyle={styles.underlineFocusStyle}
            onChange={event => this.onInputChange(event.target.value, 'gender')}
          />
        </div>
        <div className="col-xs-12 p-0" >
          <TextField
            id="user-dob"
            underlineFocusStyle={styles.underlineFocusStyle}
            onChange={event => this.onInputChange(event.target.value, 'dob')}
            type="date"
          />
        </div>
        <div className="col-xs-12">
          <RaisedButton backgroundColor="#fc7f94"
                        style={{color:'#ffffff'}}
                        disabledBackgroundColor="#E5E5E5"
                        disabledLabelColor="#CACACA"
                        rippleStyle={{opacity: 0.5}}
                        onClick={()=>this.addUser(true)}>
            Submit
          </RaisedButton>
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
export { AddEditUser }
export default connect(mapStateToProps, mapDispatchToProps)(AddEditUser)
