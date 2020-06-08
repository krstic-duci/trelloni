import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/header.module.css';

export default function Header() {
  return (
    <ul className={styles.header}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/boards'>Boards</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
    </ul>
  );
}
