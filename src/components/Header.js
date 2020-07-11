import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/header.module.css';
import ProductCart from '../components/product/ProductCart';

export default function Header() {
  return (
    <ul className={styles.header}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/products'>Products</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
      <li>
        <ProductCart />
      </li>
    </ul>
  );
}
