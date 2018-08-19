export const SUCCESS_USER_LIST = 'SUCCESS_USER_LIST'

export function usersList(data) {

  return {
    type: SUCCESS_USER_LIST,
    payload: data
  };
}

