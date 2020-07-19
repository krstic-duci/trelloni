import watcherProductsSaga from './productSaga';
import watcherCategorySaga from './categorySaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    watcherProductsSaga(),
    watcherCategorySaga()
  ]);
}
