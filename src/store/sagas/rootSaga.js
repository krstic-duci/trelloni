import watcherProductSaga from './productSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([watcherProductSaga()]);
}
