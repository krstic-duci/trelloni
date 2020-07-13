import { takeLatest, call, put, select, delay } from 'redux-saga/effects';
import {
  REQUEST_PRODUCTS,
  PREV_PRODUCT,
  NEXT_PRODUCT,
  CHANGE_FILTER,
} from '../action-types/actionTypes';
import {
  receiveProductAction,
  errorFetchingProductAction,
} from '../actions/productAction';
import { fetchProducts } from '../../api';
import { getPrevPage, getNextPage, getFilterVal } from './selectors';
import { switchPages, filterProductsBy } from '../../utils/helpers';

// watcher saga
export default function* watcherProductSaga() {
  yield takeLatest(
    [REQUEST_PRODUCTS, PREV_PRODUCT, NEXT_PRODUCT, CHANGE_FILTER],
    workerProductsSaga,
  );
}

// worker saga
function* workerProductsSaga(action) {
  try {
    let prevPage = yield select(getPrevPage);
    let nextPage = yield select(getNextPage);
    let filterProducts = yield select(getFilterVal);

    const page = switchPages(action.type, prevPage, nextPage);

    const filteredBy = filterProductsBy(filterProducts);

    // Simulate call to back-end API
    yield delay(200);
    const { data, headers } = yield call(fetchProducts, page, filteredBy);
    yield put(receiveProductAction(data, headers));
  } catch (error) {
    yield put(errorFetchingProductAction());
  }
}
