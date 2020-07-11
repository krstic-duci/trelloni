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
    const totalPage = +action.payload.headers['x-total-count'] / 10;
    return {
      ...state,
      products: [...action.payload.data],
      totalPages: totalPage,
    };
  }

  if (action.type === PREV_PRODUCT) {
    const prevPageTmp = state.prevPage === 1 ? 1 : state.prevPage - 1;
    return {
      ...state,
      prevPage: prevPageTmp,
      nextPage: prevPageTmp + 1,
    };
  }

  if (action.type === NEXT_PRODUCT) {
    const nextPageTmp =
      state.nextPage === state.totalPages
        ? state.totalPages
        : state.nextPage + 1;
    return {
      ...state,
      prevPage: nextPageTmp - 1,
      nextPage: nextPageTmp,
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
