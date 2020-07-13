import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authAction } from '../store/actions/authAction';
import ClockLoader from 'react-spinners/ClockLoader';
import styles from '../css/login.module.css';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const forbidDefault = (e) => {
    e.preventDefault();
  };

  const loginUser = () => {
    setIsLoading(true);
    dispatch(authAction(true));

    // Simulate the auth
    setTimeout(() => setIsLoading(false), 950);
    setTimeout(() => history.push('/'), 1000);
  };
  return (
    <div className={styles['login-container']}>
      <h1>Login</h1>
      <section>
        <form onSubmit={forbidDefault}>
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
            <button type='submit' onClick={loginUser} disabled={isLoading}>
              <ClockLoader loading={isLoading} size={15} color={'#747474'} />
              <span>Login</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
