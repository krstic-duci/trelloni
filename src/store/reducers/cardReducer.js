import { MAKE_NEW_CARD } from '../action-types/actionTypes';

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

  return state;
}
