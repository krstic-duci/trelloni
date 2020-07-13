import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  PREV_PRODUCT,
  NEXT_PRODUCT,
  ADD_PRODUCT,
  PRODUCT_CLEAN,
  CHANGE_FILTER,
  ERROR_PRODUCT,
} from '../action-types/actionTypes';

export function requestProductAction(payload) {
  return {
    type: REQUEST_PRODUCTS,
    payload,
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

export function addProductAction(payload) {
  return {
    type: ADD_PRODUCT,
    payload,
  };
}

export function productCleanupAction() {
  return {
    type: PRODUCT_CLEAN,
  };
}

export function changeFilterAction(payload) {
  return {
    type: CHANGE_FILTER,
    payload,
  };
}

export function errorFetchingProductAction() {
  return {
    type: ERROR_PRODUCT,
  };
}
