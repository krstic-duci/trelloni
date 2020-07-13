import {
  MAKE_NEW_CARD,
  DELETE_CARD,
  MOVE_CARD,
  UPDATE_TXT,
} from '../action-types/actionTypes';
import { CardStatus } from '../../constants';

const initialState = {
  [CardStatus.NEW]: [],
  [CardStatus.PROGRESS]: [],
  [CardStatus.FINISHED]: [],
};

export default function cardReducer(state = initialState, { type, payload }) {
  // eslint-disable-next-line
  if (type == MAKE_NEW_CARD) {
    return {
      ...state,
      [CardStatus.NEW]: [...state[CardStatus.NEW], payload],
    };
  }
  // eslint-disable-next-line
  if (type == DELETE_CARD) {
    let tmpArr = state[payload.status].filter((elem) => elem.id !== payload.id);
    return {
      ...state,
      [payload.status]: [...tmpArr],
    };
  }

  // eslint-disable-next-line
  if (type == MOVE_CARD) {
    let prevTmpArr = state[payload.prevStatus]; // previous elements
    let prevElemIdx = prevTmpArr.findIndex((elem) => elem.id === payload.id);
    let movedCard = prevTmpArr.splice(prevElemIdx, 1)[0];
    movedCard.status = payload.nextStatus;
    let nextTmpArr = [...state[payload.nextStatus], movedCard]; // current elements
    return {
      ...state,
      [payload.prevStatus]: prevTmpArr,
      [payload.nextStatus]: nextTmpArr,
    };
  }

  // eslint-disable-next-line
  if (type == UPDATE_TXT) {
    console.log('update text');
  }

  return state;
}
