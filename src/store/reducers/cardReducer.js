import { MAKE_NEW_CARD, DELETE_CARD } from '../action-types/actionTypes';

const initialState = {
  cards: [],
};

export default function cardReducer(state = initialState, action) {
  // eslint-disable-next-line
  if (action.type == MAKE_NEW_CARD) {
    return {
      ...state,
      cards: [...state.cards, action.payload],
    };
  }
  // eslint-disable-next-line
  if (action.type == DELETE_CARD) {
    let filteredCards = state.cards.filter(
      (elem) => elem.id !== action.payload,
    );
    return {
      ...state,
      cards: filteredCards,
    };
  }

  return state;
}
