import {
  RECEIVE_PRODUCTS,
  PREV_PRODUCT,
  NEXT_PRODUCT,
  ADD_PRODUCT,
} from '../action-types/actionTypes';

const initialState = {
  products: [],
  prevPage: 1,
  nextPage: 2,
  totalPages: null,
  totalPrice: 0,
};

export default function productReducer(state = initialState, action) {
  if (action.type === RECEIVE_PRODUCTS) {
    const totalPages = +action.payload.headers['x-total-count'] / 10;
    return {
      ...state,
      products: [...action.payload.data],
      totalPages: totalPages,
    };
  }

  if (action.type === PREV_PRODUCT) {
    return {
      ...state,
      prevPage: state.prevPage - 1,
      nextPage: state.nextPage - 1,
    };
  }

  if (action.type === NEXT_PRODUCT) {
    return {
      ...state,
      prevPage:
        state.prevPage === state.totalPages
          ? state.totalPages
          : state.prevPage + 1,
      nextPage: state.nextPage + 1,
    };
  }

  if (action.type === ADD_PRODUCT) {
    const priceForCart = state.totalPrice + action.payload;
    return {
      ...state,
      totalPrice: priceForCart,
    };
  }

  return state;
}
