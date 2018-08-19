export const SUCCESS_USER_LIST = 'SUCCESS_USER_LIST'
export const SUCCESS_USER_INFO = 'SUCCESS_USER_INFO'

export function usersList(data) {

  return {
    type: SUCCESS_USER_LIST,
    payload: data
  };
}

export function userInfo(data) {
  return {
    type: SUCCESS_USER_INFO,
    payload: data
  };
}



