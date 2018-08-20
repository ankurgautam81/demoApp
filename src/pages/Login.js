import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import browserHistory from "react-router/lib/browserHistory";
import {setLogin} from '../actions/login'
import {isEmpty, get} from 'lodash'
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

class Login extends React.Component {
  state = {
    loginId : '',
    password : ''
  }

  componentWillReceiveProps(nextProps){
    !isEmpty(nextProps.userToken) && browserHistory.push('home')
  }

  onInputChange = (value, key) => {
    this.setState({
      [key]: value,
    });
  }

  loginUser = async() =>{
    await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.loginId,
        password: this.state.password,
      }),
    }).then(response => response.json())
      .then(data => {
         this.props.setLogin(data)
      });
  }

  render () {
    return (
      <div className="col-sm-offset-2 col-md-offset-4 col-lg-offset-4 col-xs-12 col-sm-8 col-md-4 login-container">
        <div className="col-xs-12 text-center">Login</div>
        <TextField
          hintText="Login"
          underlineFocusStyle={styles.underlineFocusStyle}
          onChange={event => this.onInputChange(event.target.value, 'loginId')}
        /><br/>
        <TextField
          hintText="Password"
          type="password"
          underlineFocusStyle={styles.underlineFocusStyle}
          onChange={event => this.onInputChange(event.target.value, 'password')}
        /><br/>
        <RaisedButton label="LOGIN"
                      backgroundColor="#fc7f94"
                      labelColor="#ffffff"
                      disabledBackgroundColor="#E5E5E5"
                      disabledLabelColor="#CACACA"
                      rippleStyle={{opacity: 0.5}}
        onClick={()=>this.loginUser()}/>
      </div>

    )
  }
}


function mapStateToProps (state) {
  return {
    userToken : state.userToken
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    setLogin: (customer) => {
      return dispatch(setLogin(customer))
    }
  }
}
export { Login }
export default connect(mapStateToProps, mapDispatchToProps)(Login)