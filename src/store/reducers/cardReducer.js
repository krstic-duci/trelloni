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
  if (type == MAKE_NEW_CARD) {
    return {
      ...state,
      [CardStatus.NEW]: [...state[CardStatus.NEW], payload],
    };
  }
  if (type == DELETE_CARD) {
    let tmpArr = state[payload.status].filter((elem) => elem.id !== payload.id);
    return {
      ...state,
      [payload.status]: [...tmpArr],
    };
  }

  if (type == MOVE_CARD) {
    // previous elements
    let prevTmpArr = state[payload.prevStatus];
    let prevElemIdx = prevTmpArr.findIndex((elem) => elem.id === payload.id);
    let movedCard = prevTmpArr.splice(prevElemIdx, 1)[0];
    movedCard.status = payload.nextStatus;
    // current elements
    let nextTmpArr = [...state[payload.nextStatus], movedCard];
    return {
      ...state,
      [payload.prevStatus]: [...prevTmpArr],
      [payload.nextStatus]: [...nextTmpArr],
    };
  }

  if (type == UPDATE_TXT) {
    let newTxtAreaCards = [...state[payload.status]];
    newTxtAreaCards.map((elem) => {
      if (elem.id === payload.id) {
        elem.txtArea = payload.txtArea;
      }
      return elem;
    });
    return {
      ...state,
      [payload.status]: newTxtAreaCards,
    };
  }

  return state;
}
