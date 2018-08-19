export const REQUEST_LOGIN_CUSTOMER = 'REQUEST_LOGIN_CUSTOMER'
export const SUCCESS_LOGIN_CUSTOMER = 'SUCCESS_LOGIN_CUSTOMER'
export const FAILED_LOGIN_CUSTOMER = 'FAILED_LOGIN_CUSTOMER'

export function setLogin(data) {
  return {
    type: SUCCESS_LOGIN_CUSTOMER,
    payload: data
  };
}

