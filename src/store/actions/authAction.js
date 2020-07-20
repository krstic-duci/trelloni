import { SET_AUTH } from '../action-types/actionTypes';

export function authAction(payload) {
  return {
    type: SET_AUTH,
    payload,
  };
}
