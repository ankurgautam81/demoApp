import * as ActionType from '../actions/common'
import get from 'lodash/get'

function isClientOnMobile (state = 1, action) {
  switch (action.type) {
    case ActionType.SET_CLIENT:
      return get(action, 'client', 1)
    default:
      return state
  }
}

export { isClientOnMobile }