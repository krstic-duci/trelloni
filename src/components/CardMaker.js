import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeCard } from '../store/actions/cardAction';
import { uniqueId } from '../utils/helpers.js';

export default function CardMaker() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const dispatch = useDispatch();

  const showCardSubmitForm = () => {
    setIsFormShown(!isFormShown);
  };

  const setTitleCard = (e) => {
    setInputVal(e.target.value);
  };

  const makingNewCard = () => {
    if (inputVal) {
      dispatch(
        makeCard({
          id: uniqueId(),
          title: inputVal,
          details: [1, 2, 3],
          status: 'progress',
        }),
      );
    }
    setInputVal('');
  };
  return (
    <div>
      <button onClick={showCardSubmitForm}>
        {isFormShown ? 'Close form' : 'Show form'}
      </button>
      {isFormShown ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            <input
              type='text'
              placeholder='Card title'
              value={inputVal}
              onChange={(e) => setTitleCard(e)}
            />
          </label>
          <button onClick={makingNewCard}>Make new card</button>
        </form>
      ) : null}
    </div>
  );
}
