import { SET_AUTH } from '../action-types/actionTypes';

const initialState = {
  isAuth: false,
};

export default function authReducer(state = initialState, action) {
  if (action.type == SET_AUTH) {
    return {
      ...state,
      isAuth: action.payload,
    };
  }

  return state;
}
