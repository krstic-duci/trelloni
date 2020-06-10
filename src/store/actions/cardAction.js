import {
  MAKE_NEW_CARD,
  DELETE_CARD,
  MOVE_CARD,
} from '../action-types/actionTypes';

export function makeCard(payload) {
  return {
    type: MAKE_NEW_CARD,
    payload,
  };
}

export function deleteCard(payload) {
  return {
    type: DELETE_CARD,
    payload,
  };
}

export function moveCard(payload) {
  return {
    type: MOVE_CARD,
    payload,
  };
}
