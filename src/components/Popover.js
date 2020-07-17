import React from 'react';
import styles from '../css/popover.module.css';

const Popover = ({ show = false, type, text }) => {
  return show ? (
    <div className={styles['popover-container']}>
      <p>{type} must have:</p>
      <ul>
        {text.length > 0
          ? text.map((elem, i) => <li key={i}>{elem}</li>)
          : null}
      </ul>
    </div>
  ) : null;
};

export default Popover;
