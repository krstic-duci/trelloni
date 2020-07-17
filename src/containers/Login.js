import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ClockLoader from 'react-spinners/ClockLoader';
import Popover from '../components/Popover';
import {
  isEmailFieldValid,
  isPassFieldValid,
  forbidDefault,
} from '../utils/helpers';
import { authAction } from '../store/actions/authAction';
import styles from '../css/login.module.css';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [showEmailPopover, setShowEmailPopover] = useState(false);
  const [showPassPopover, setShowPassPopover] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const updateUserEmail = (e) => {
    const val = e.target.value;
    setShowEmailPopover(false);
    setShowPassPopover(false);
    setUserEmail(val.trim());
  };

  const updateUserPass = (e) => {
    const val = e.target.value;
    setShowEmailPopover(false);
    setShowPassPopover(false);
    setUserPass(val.trim());
  };

  const emailOnFocusChange = () => {
    setShowPassPopover(false)
    setShowEmailPopover(!showEmailPopover);
  };

  const passOnFocusChange = () => {
    setShowEmailPopover(false);
    setShowPassPopover(!showPassPopover)
  }

  const loginUser = () => {
    setIsLoading(true);
    dispatch(authAction(true));

    // Simulate the auth
    setTimeout(() => {
      setIsLoading(false);
      setUserEmail('');
      setUserPass('');
    }, 950);
    setTimeout(() => history.push('/'), 1000);
  };
  return (
    <div className={styles['login-container']}>
      <h1>Login</h1>
      <section>
        <form onSubmit={forbidDefault}>
          <div>
            <label>
              <input
                type='text'
                placeholder='Email'
                onChange={updateUserEmail}
                onBlur={updateUserEmail}
                onFocus={emailOnFocusChange}
                value={userEmail}
                name='email'
              />
            </label>
            <Popover
              show={showEmailPopover}
              type='email'
              text={['at least 6 characters', 'must be valid email address']}
            />
          </div>
          <div>
            <label>
              <input
                type='password'
                placeholder='Password'
                onChange={updateUserPass}
                onBlur={updateUserPass}
                onFocus={passOnFocusChange}
                value={userPass}
                name='password'
              />
            </label>
            <Popover
              show={showPassPopover}
              type='password'
              text={['at least 6 characters', 'must contain upper-case letter']}
            />
          </div>
          <div>
            <button
              type='submit'
              onClick={loginUser}
              disabled={
                !(isEmailFieldValid(userEmail) && isPassFieldValid(userPass))
              }
              className={
                !(isEmailFieldValid(userEmail) && isPassFieldValid(userPass))
                  ? styles['login-btn--disabled']
                  : styles['login-btn--enabled']
              }
            >
              <ClockLoader loading={isLoading} size={15} color={'#747474'} />
              <span>Login</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
