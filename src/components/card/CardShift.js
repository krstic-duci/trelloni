import React from 'react';
import { useDispatch } from 'react-redux';
import { moveCardAction } from '../../store/actions/cardAction';
import { CardStatus } from '../../constants';

export default function CardShift({ id, status }) {
  const dispatch = useDispatch();
  const selectValue = (e) => {
    dispatch(moveCardAction({ id: id, status: e.target.value }));
  };
  return (
    <select onChange={(e) => selectValue(e)} value={status}>
      <option value={CardStatus.NEW}>new</option>
      <option value={CardStatus.PROGRESS}>in progress</option>
      <option value={CardStatus.FINISHED}>finished</option>
    </select>
  );
}
