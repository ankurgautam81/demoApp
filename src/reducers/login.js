import * as ActionType from '../actions/login'
import get from 'lodash/get'

function userToken (state = '', action) {
  switch (action.type) {
    case ActionType.SUCCESS_LOGIN_CUSTOMER:
      return get(action, 'payload.token', '')
    default:
      return state
  }
}

export { userToken }