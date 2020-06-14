import { takeLatest, call, put } from 'redux-saga/effects';
import { REQUEST_PRODUCT } from '../action-types/actionTypes';
import { receiveProductAction } from '../actions/productAction';
import { fetchProducts } from '../../api';

// watcher saga
export default function* watcherProductSaga() {
  yield takeLatest(REQUEST_PRODUCT, workerProductSaga);
}

// worker saga
function* workerProductSaga() {
  try {
    const data = yield call(fetchProducts);
    yield put(receiveProductAction(data));
  } catch (error) {
    throw new Error('error in productSaga', error);
  }
}
