import React from 'react';
import { Link } from 'react-router-dom';
import ProductCart from '../components/product/ProductCart';
import styles from '../css/header.module.css';

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
        <ProductCart />
      </li>
    </ul>
  );
}
