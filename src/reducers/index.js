import { combineReducers } from 'redux'

import {  isClientOnMobile } from '../reducers/common'
import { userToken } from '../reducers/login'
import {users, userInfo} from '../reducers/usersList'

const rootReducer = combineReducers({
  isClientOnMobile,
  userToken,
  users,
  userInfo
})

export default rootReducer
