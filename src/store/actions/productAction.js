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

export function receiveProductAction(data, headers) {
  return {
    type: RECEIVE_PRODUCTS,
    payload: {
      data,
      headers,
    },
  };
}

export function prevProductAction() {
  return {
    type: PREV_PRODUCT,
  };
}

export function nextProductAction() {
  return {
    type: NEXT_PRODUCT,
  };
}
