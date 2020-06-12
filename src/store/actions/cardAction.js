import {
  MAKE_NEW_CARD,
  DELETE_CARD,
  MOVE_CARD,
  UPDATE_TXT,
} from '../action-types/actionTypes';

export function makeCardAction(payload) {
  return {
    type: MAKE_NEW_CARD,
    payload,
  };
}

export function deleteCardAction(payload) {
  return {
    type: DELETE_CARD,
    payload,
  };
}

export function moveCardAction(payload) {
  return {
    type: MOVE_CARD,
    payload,
  };
}

export function updateCardTxtAction(payload) {
  return {
    type: UPDATE_TXT,
    payload,
  };
}
