import { SET_AUTH, DISABLE_AUTH } from '../action-types/actionTypes';

const initialState = {
  isAuth: false,
};

export default function authReducer(state = initialState, action) {
  // eslint-disable-next-line
  if (action.type == SET_AUTH) {
    return {
      ...state,
      isAuth: action.payload,
    };
  }

  if (action.type === DISABLE_AUTH) {
    return {
      ...state,
      isAuth: action.payload,
    };
  }

  return state;
}
