import { combineReducers } from 'redux'

import {  isClientOnMobile } from '../reducers/common'
import { userToken } from '../reducers/login'
const rootReducer = combineReducers({
  isClientOnMobile,
  userToken
})

export default rootReducer
