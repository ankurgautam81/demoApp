import { combineReducers } from 'redux'

import {  isClientOnMobile } from '../reducers/common'
import { userToken } from '../reducers/login'
import {users} from '../reducers/usersList'

const rootReducer = combineReducers({
  isClientOnMobile,
  userToken,
  users
})

export default rootReducer
