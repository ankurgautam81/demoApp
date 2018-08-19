import * as ActionType from '../actions/userList'
import get from 'lodash/get'

function users (state = [], action) {
  switch (action.type) {
    case ActionType.SUCCESS_USER_LIST:
      console.log('action=',action.payload)
      return get(action, 'payload', [])
    default:
      return state
  }
}

export { users }