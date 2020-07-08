import { takeLatest, call, put, select, takeEvery } from 'redux-saga/effects';
import {
  REQUEST_PRODUCTS,
  PREV_PRODUCT,
  NEXT_PRODUCT,
} from '../action-types/actionTypes';
import {
  receiveProductAction,
  prevProductAction,
  nextProductAction,
} from '../actions/productAction';
import { fetchProducts } from '../../api';
import { getPrevPage, getNextPage, getTotalPage } from './selectors';

// watcher saga
export default function* watcherProductSaga() {
  yield takeEvery(REQUEST_PRODUCTS, workerProductsSaga);
}

// worker saga
function* workerProductsSaga(action) {
  try {
    // FIXME: page needs to be dynamic
    let prevPage = yield select(getPrevPage);
    let nextPage = yield select(getNextPage);
    let totalPages = yield select(getTotalPage);
    let currentPage = 1;

    const { data, headers } = yield call(fetchProducts, currentPage);
    yield put(receiveProductAction(data, headers));
  } catch (error) {
    throw new Error('error in productSaga', error);
  }
}
