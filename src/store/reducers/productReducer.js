import { RECEIVE_PRODUCT } from '../action-types/actionTypes';
const initialState = {
  products: [],
};

export default function productReducer(state = initialState, action) {
  if (action.type === RECEIVE_PRODUCT) {
    console.log(action.payload);
    return {
      ...state,
      products: [...action.payload],
    };
  }
  return state;
}
