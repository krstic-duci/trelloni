import React from 'react';
import styles from '../css/cardsSingle.module.css';
import CardShift from './CardShift';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../store/actions/cardAction';

export default function CardSingle({ titleCard, id, status }) {
  const dispatch = useDispatch();
  const deleteCardById = () => {
    dispatch(deleteCard(id));
  };
  return (
    <div className={styles['cards-single-container']}>
      <h3>{titleCard}</h3>
      <CardShift id={id} status={status} />
      <div>
        <textarea placeholder='Type text...'></textarea>
      </div>
      <button onClick={deleteCardById}>X</button>
    </div>
  );
}
