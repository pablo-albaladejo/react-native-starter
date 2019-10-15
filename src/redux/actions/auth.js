export const USER_LOGIN = 'USER_LOGIN';
export const SET_AUTH = 'SET_AUTH';

export function userLogin(payload) {
  return {
    type: USER_LOGIN,
    payload
  };
}

export function setAuth(payload) {
  return {
    type: SET_AUTH,
    payload
  };
}
