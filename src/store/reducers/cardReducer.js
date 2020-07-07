import {
  MAKE_NEW_CARD,
  DELETE_CARD,
  MOVE_CARD,
  UPDATE_TXT,
} from '../action-types/actionTypes';

const initialState = {
  cards: [],
};

export default function cardReducer(state = initialState, action) {
  // eslint-disable-next-line
  if (action.type == MAKE_NEW_CARD) {
    const newCard = action.payload;
    return {
      ...state,
      cards: [...state.cards, newCard],
    };
  }
  // eslint-disable-next-line
  if (action.type == DELETE_CARD) {
    let tmpArr = state.cards.filter((elem) => elem.id !== action.payload);
    return {
      ...state,
      cards: tmpArr,
    };
  }

  // eslint-disable-next-line
  if (action.type == MOVE_CARD) {
    let tmpArr = state.cards.map((elem) => {
      if (elem.id === action.payload.id) {
        elem.status = action.payload.status;
      }
      return elem;
    });
    return {
      ...state,
      cards: tmpArr,
    };
  }

  // eslint-disable-next-line
  if (action.type == UPDATE_TXT) {
    console.log('update text');
  }

  return state;
}
