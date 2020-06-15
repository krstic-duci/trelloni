import React from 'react';
import styles from '../../css/cardsSingle.module.css';
import CardShift from './CardShift';
import { useDispatch } from 'react-redux';
import {
  deleteCardAction,
  updateCardTxtAction,
} from '../../store/actions/cardAction';
import debounce from 'lodash/debounce';

export default function CardSingle({ titleCard, id, status, txtArea }) {
  const dispatch = useDispatch();
  const deleteCardById = () => {
    dispatch(deleteCardAction(id));
  };
  const updateTxtArea = (e) => {
    const val = e.target.value;
    handleDebounce(val);
  };
  const handleDebounce = debounce(
    (val) => dispatch(updateCardTxtAction({ txtArea: val, id })),
    300,
  );
  return (
    <div className={styles['cards-single-container']}>
      <h3>{titleCard}</h3>
      <CardShift id={id} status={status} />
      <div>
        {/* <textarea
          placeholder='Type text...'
          // value={txtArea}
          onChange={updateTxtArea}></textarea> */}
        <textarea
          placeholder='Type text...'
          defaultValue={txtArea}
          onKeyDown={updateTxtArea}></textarea>
      </div>
      <button onClick={deleteCardById}>X</button>
    </div>
  );
}
