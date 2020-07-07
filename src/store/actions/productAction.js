import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  PREV_PRODUCT,
  NEXT_PRODUCT,
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

export function prevProductAction(payload) {
  return {
    type: PREV_PRODUCT,
    payload,
  };
}

export function nextProductAction(payload) {
  return {
    type: NEXT_PRODUCT,
  };
}
