import { RECEIVE_PRODUCTS, PREV_PRODUCT } from '../action-types/actionTypes';
const initialState = {
  products: [],
  pages: [],
};

export default function productReducer(state = initialState, action) {
  if (action.type === RECEIVE_PRODUCTS) {
    return {
      ...state,
      products: [...action.payload],
    };
  }
  if (action.type === PREV_PRODUCT) {
    console.log('daaa');
    return {
      ...state,
      pages: [...action.payload],
    };
  }
  return state;
}
