import React, { useState } from 'react';
import styles from '../css/home.module.css';

export default function Home() {
  const [isFormShown, setIsFormShown] = useState(false);

  const showCardSubmitForm = () => {
    setIsFormShown(!isFormShown);
  };
  return (
    <section>
      <h1>Home</h1>
      <div>
        <header>
          <p>Welcome to Trelloni</p>
        </header>
      </div>

      <div>
        <div>
          <button onClick={showCardSubmitForm}>
            {isFormShown ? 'Close form' : 'Show form'}
          </button>
          {isFormShown ? (
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                <input type='text' placeholder='Card title' />
              </label>
              <button type='submit'>Make new card</button>
            </form>
          ) : null}
        </div>

        {/* Cards */}
        <div className={styles['cards-container']}>
          <section>
            <h2>New</h2>
          </section>

          <section>
            <h2>In progress</h2>
          </section>

          <section>
            <h2>Finished</h2>
          </section>
        </div>
      </div>
    </section>
  );
}
