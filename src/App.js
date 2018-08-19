import React, { Component } from 'react';
import './App.css';
/*
 import { Provider } from "react-redux";*/
import { createStore, applyMiddleware } from "redux";
import { Router } from 'react-router'
import browserHistory from 'react-router/lib/browserHistory'
import Provider from 'react-redux/lib/components/Provider'
import reducers from "../src/reducers";
import ReduxPromise from "redux-promise";
import routes from './routes/index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './constants/theme'
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={createStoreWithMiddleware(reducers)}>
          <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)} routes={routes}/>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
