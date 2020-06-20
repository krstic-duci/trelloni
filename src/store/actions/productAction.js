import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
} from '../action-types/actionTypes';

export function requestProductAction() {
  return {
    type: REQUEST_PRODUCTS,
  };
}

export function receiveProductAction(payload) {
  return {
    type: RECEIVE_PRODUCTS,
    payload,
  };
}
