import {
  RECEIVE_CATEGORY,
  REQUEST_CATEGORY,
  ERROR_CATEGORY,
} from '../action-types/actionTypes';

export function requestCategoryAction(payload) {
  return {
    type: REQUEST_CATEGORY,
    payload,
  };
}

export function receiveCategoryAction(payload) {
  return {
    type: RECEIVE_CATEGORY,
    payload,
  };
}

export function errorCategoryAction() {
  return {
    type: ERROR_CATEGORY,
  };
}
