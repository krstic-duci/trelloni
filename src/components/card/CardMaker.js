import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeCardAction } from '../../store/actions/cardAction';
import { uniqueId, forbidDefault } from '../../utils/helpers.js';

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
        makeCardAction({
          id: 'cards-' + uniqueId(),
          title: inputVal,
          details: [1, 2, 3],
          status: 'new',
          txtArea: '',
        }),
      );
    }
    setInputVal('');
  };
  return (
    <div style={{ margin: '0 25px 15px' }}>
      <button onClick={showCardSubmitForm} style={{ marginBottom: '5px' }}>
        {isFormShown ? 'Close form' : 'Show form'}
      </button>
      {isFormShown ? (
        <form onSubmit={forbidDefault}>
          <label>
            <input
              type='text'
              placeholder='Card title'
              value={inputVal}
              onChange={setTitleCard}
            />
          </label>
          <button onClick={makingNewCard}>Make new card</button>
        </form>
      ) : null}
    </div>
  );
}
