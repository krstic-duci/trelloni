import React from 'react';
import { useDispatch } from 'react-redux';
import { moveCardAction } from '../../store/actions/cardAction';
import { CardStatus } from '../../constants';

export default function CardShift({ id, status }) {
  const dispatch = useDispatch();
  const selectValue = (e, prevStatus) => {
    dispatch(moveCardAction({ id, nextStatus: e.target.value, prevStatus }));
  };
  return (
    <select
      onBlur={(e) => selectValue(e, status)}
      onChange={(e) => selectValue(e, status)}
      value={status}
    >
      <option value={CardStatus.NEW}>new</option>
      <option value={CardStatus.PROGRESS}>in progress</option>
      <option value={CardStatus.FINISHED}>finished</option>
    </select>
  );
}
