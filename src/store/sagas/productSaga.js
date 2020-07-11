import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  REQUEST_PRODUCTS,
  PREV_PRODUCT,
  NEXT_PRODUCT,
} from '../action-types/actionTypes';
import { receiveProductAction } from '../actions/productAction';
import { fetchProducts } from '../../api';
import { getPrevPage, getNextPage } from './selectors';

// watcher saga
export default function* watcherProductSaga() {
  yield takeLatest(
    [REQUEST_PRODUCTS, PREV_PRODUCT, NEXT_PRODUCT],
    workerProductsSaga,
  );
}

// worker saga
function* workerProductsSaga(action) {
  try {
    let page = 1;
    let prevPage = yield select(getPrevPage);
    let nextPage = yield select(getNextPage);

    if (action.type === PREV_PRODUCT) {
      page = prevPage;
    } else if (action.type === NEXT_PRODUCT) {
      page = nextPage - 1;
    }

    const { data, headers } = yield call(fetchProducts, page);
    yield put(receiveProductAction(data, headers));
  } catch (error) {
    throw new Error('error in productSaga', error);
  }
}
