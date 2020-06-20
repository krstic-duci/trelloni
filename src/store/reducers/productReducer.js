import { RECEIVE_PRODUCTS } from '../action-types/actionTypes';
const initialState = {
  products: [],
};

export default function productReducer(state = initialState, action) {
  if (action.type === RECEIVE_PRODUCTS) {
    return {
      ...state,
      products: [...action.payload],
    };
  }
  return state;
}
