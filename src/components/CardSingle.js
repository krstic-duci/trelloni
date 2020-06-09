import React from 'react';
import styles from '../css/cardsSingle.module.css';
import CardShift from './CardShift';

export default function CardSingle({ titleCard }) {
  const deleteCard = () => {};
  return (
    <div className={styles['cards-single-container']}>
      <h3>{titleCard}</h3>
      <CardShift />
      <div>
        <textarea placeholder='Type text...'></textarea>
      </div>
      <button onClick={deleteCard}>X</button>
    </div>
  );
}
