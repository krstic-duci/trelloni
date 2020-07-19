import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { REQUEST_CATEGORY } from '../action-types/actionTypes';
import {
  receiveCategoryAction,
  errorCategoryAction,
} from '../actions/categoryAction';
import { fetchCategoryProducts } from '../../api';

// watcher saga
export default function* watcherCategorySaga() {
  yield takeLatest(REQUEST_CATEGORY, workerCategorySaga);
}

function* workerCategorySaga(action) {
  try {
    const category = action.payload;
    const { data } = yield call(fetchCategoryProducts, category);
    //simulate API call
    yield delay(200);
    yield put(receiveCategoryAction(data));
  } catch (error) {
    yield put(errorCategoryAction());
  }
}
