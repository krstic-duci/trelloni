import {
  RECEIVE_CATEGORY,
  REQUEST_CATEGORY,
  ERROR_CATEGORY,
} from '../action-types/actionTypes';

const initialState = {
  categoryProducts: [],
  categoryIsLoading: false,
  errorCategory: null,
};

export default function categoryReducer(state = initialState, action) {
  if (action.type === REQUEST_CATEGORY) {
    return {
      ...state,
      categoryIsLoading: true,
    };
  }

  if (action.type === RECEIVE_CATEGORY) {
    return {
      ...state,
      categoryProducts: [...action.payload],
      categoryIsLoading: false,
    };
  }

  if (action.type === ERROR_CATEGORY) {
    return {
      ...state,
      categoryIsLoading: false,
      errorCategory:
        'Cannot fetch category products, please try again later...',
    };
  }

  return state;
}
