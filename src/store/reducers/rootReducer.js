import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cardReducer from './cardReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  auth: authReducer,
  card: cardReducer,
  product: productReducer,
  category: categoryReducer,
});
