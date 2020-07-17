import React, { useCallback } from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import {
  deleteCardAction,
  updateCardTxtAction,
} from '../../store/actions/cardAction';
import CardShift from './CardShift';
import styles from '../../css/cardsSingle.module.css';

export default function CardSingle({ titleCard, id, status, txtArea }) {
  const dispatch = useDispatch();
  const delayedTxtAreaUpdate = useCallback(
    debounce(
      (newTxt) =>
        dispatch(updateCardTxtAction({ txtArea: newTxt, id, status })),
      300,
    ),
  []);
  const deleteCardById = () => {
    dispatch(deleteCardAction({ id, status }));
  };
  const updateTxtArea = (e) => {
    delayedTxtAreaUpdate(e.target.value);
  };
  return (
    <div className={styles['cards-single-container']}>
      <h3>{titleCard}</h3>
      <CardShift id={id} status={status} />
      <div>
        <textarea
          onBlur={updateTxtArea}
          defaultValue={txtArea}
          placeholder='Type text...'
          onChange={updateTxtArea}></textarea>
      </div>
      <button onClick={deleteCardById}>X</button>
    </div>
  );
}
