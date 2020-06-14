import { REQUEST_PRODUCT, RECEIVE_PRODUCT } from '../action-types/actionTypes';

export function requestProductAction() {
  return {
    type: REQUEST_PRODUCT,
  };
}

export function receiveProductAction(payload) {
  return {
    type: RECEIVE_PRODUCT,
    payload,
  };
}
