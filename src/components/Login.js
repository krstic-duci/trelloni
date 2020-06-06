import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from '../css/login.module.css';
import authAction from '../store/actions/authAction';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const loginUser = () => {
    dispatch(authAction(true));

    // Simulate the auth
    setTimeout(() => {
      history.push('/');
    }, 30);
  };

  return (
    <div className={styles['login-container']}>
      <h1>Login</h1>
      <section>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>
              <input type='text' placeholder='Email' />
            </label>
          </div>
          <div>
            <label>
              <input type='text' placeholder='Password' />
            </label>
          </div>
          <div>
            <button type='submit' onClick={loginUser}>
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
