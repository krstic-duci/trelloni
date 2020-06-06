import { SET_AUTH } from '../action-types/actionTypes';

export default function authAction(payload) {
  return {
    type: SET_AUTH,
    payload,
  };
}
