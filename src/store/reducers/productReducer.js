import {
  RECEIVE_PRODUCTS,
  PREV_PRODUCT,
  NEXT_PRODUCT,
  ADD_PRODUCT,
  PRODUCT_CLEAN,
  CHANGE_FILTER,
  REQUEST_PRODUCTS,
  ERROR_PRODUCT,
} from '../action-types/actionTypes';

const initialState = {
  products: [],
  productsLoading: false,
  prevPage: 1,
  nextPage: 2,
  totalPages: 0,
  totalPrice: 0,
  filterVal: '',
  errorProduct: null,
};

export default function productReducer(state = initialState, action) {
  if (action.type === REQUEST_PRODUCTS) {
    return {
      ...state,
      productsLoading: true,
    };
  }
  if (action.type === RECEIVE_PRODUCTS) {
    const totalPages = +action.payload.headers['x-total-count'] / 10;
    return {
      ...state,
      products: [...action.payload.data],
      totalPages: totalPages,
      productsLoading: false,
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

  if (action.type === PRODUCT_CLEAN) {
    return {
      ...state,
      prevPage: 1,
      nextPage: 2,
      filterVal: '',
    };
  }

  if (action.type === CHANGE_FILTER) {
    return {
      ...state,
      prevPage: 1,
      nextPage: 2,
      filterVal: action.payload,
    };
  }

  if (action.type === ERROR_PRODUCT) {
    return {
      ...state,
      productsLoading: false,
      errorProduct: 'Error fetching products, please try again later...',
    };
  }

  return state;
}
