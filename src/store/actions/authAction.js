import { SET_AUTH, DISABLE_AUTH } from '../action-types/actionTypes';

export function authAction(payload) {
  return {
    type: SET_AUTH,
    payload,
  };
}

export function disableAuthAction(payload) {
  return {
    type: DISABLE_AUTH,
    payload,
  };
}
