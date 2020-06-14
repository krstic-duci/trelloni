import React from 'react';
import { useDispatch } from 'react-redux';
import { disableAuthAction } from '../store/actions/authAction';

export default function LogOut() {
  const dispatch = useDispatch();
  const userLogOut = () => {
    dispatch(disableAuthAction(false));
  };
  return (
    <div style={{ textAlign: 'right' }}>
      <button onClick={userLogOut}>Log out</button>
    </div>
  );
}
