import {
  RECEIVE_PRODUCTS,
  PREV_PRODUCT,
  NEXT_PRODUCT,
} from '../action-types/actionTypes';
const initialState = {
  products: [],
  prevPage: 1,
  nextPage: 2,
  totalPages: null,
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
      prevPage: nextPageTmp - 2,
      nextPage: nextPageTmp,
    };
  }
  return state;
}
