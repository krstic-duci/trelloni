import {
  MAKE_NEW_CARD,
  DELETE_CARD,
  MOVE_CARD,
  UPDATE_TXT,
} from '../action-types/actionTypes';
import { customFilter } from '../../utils/helpers';

// const initialState = {
//   cards: [],
// };

const initialState = {
  cards: {
    'new': [],
    'progress': [],
    'finished': [],
  },
};

export default function cardReducer(state = initialState, action) {
  // eslint-disable-next-line
  if (action.type == MAKE_NEW_CARD) {
    return {
      ...state,
      cards: {
        ...state.cards,
        new: [...state.cards.new, action.payload],
      },
    };
  }
  // eslint-disable-next-line
  if (action.type == DELETE_CARD) {
    let filteredCards = customFilter(
      state.cards,
      action.payload,
      true,
      false,
      false,
    );
    return {
      ...state,
      cards: {
        ...state.cards,
        [filteredCards.whatColumn]: filteredCards.data,
      },
    };
  }

  // eslint-disable-next-line
  if (action.type == MOVE_CARD) {
    let tmpArr = customFilter(state.cards, action.payload, false, true, false);
    return {
      ...state,
      cards: {
        ...state.cards,
        [tmpArr.whatColumn]: [...state.cards[tmpArr.whatColumn], tmpArr.data],
      },
    };
  }

  // eslint-disable-next-line
  if (action.type == UPDATE_TXT) {
    let updateTxtArr = customFilter(
      state.cards,
      action.payload,
      false,
      false,
      true,
    );
    console.log(updateTxtArr);
    // return {
    //   ...state,
    //   cards: {
    //     ...state.cards,
    //     [updateTxtArr.status]: [
    //       ...state.cards[updateTxtArr.status],
    //       updateTxtArr,
    //     ],
    //   },
    // };
  }

  return state;
}
