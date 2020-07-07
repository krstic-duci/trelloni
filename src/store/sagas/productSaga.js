import { takeLatest, call, put } from 'redux-saga/effects';
import { REQUEST_PRODUCTS } from '../action-types/actionTypes';
import {
  receiveProductAction,
  prevProductAction,
} from '../actions/productAction';
import { fetchProducts } from '../../api';

// watcher saga
export default function* watcherProductSaga() {
  yield takeLatest(REQUEST_PRODUCTS, workerProductsSaga);
}

// worker saga
function* workerProductsSaga() {
  try {
    const apiData = yield call(fetchProducts);
    // grab headers for previous/next page
    let arrForPrevNextPage = [];
    let apiDataHeaders = apiData.headers.link.split(',');
    apiDataHeaders.pop();
    apiDataHeaders.map((elem) => {
      let tmp = elem.split(';');
      arrForPrevNextPage.push(tmp[0]);
      return arrForPrevNextPage;
    });
    // let pagePrev = arrForPrevNextPage[0];
    // let pageNext = arrForPrevNextPage[1];
    console.log(arrForPrevNextPage);
    yield put(receiveProductAction(apiData.data));
    yield put(prevProductAction(arrForPrevNextPage));
  } catch (error) {
    throw new Error('error in productSaga', error);
  }
}
