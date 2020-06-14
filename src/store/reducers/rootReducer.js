import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cardReducer from './cardReducer';
import productReducer from './productReducer';
export default combineReducers({
  authReducer,
  cardReducer,
  productReducer,
});
