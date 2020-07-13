import React from 'react';
import { useSelector } from 'react-redux';
import CardWrapper from '../components/card/CardWrapper';
import CardMaker from '../components/card/CardMaker';
import { CardStatus } from '../constants';
import styles from '../css/home.module.css';

export default function Home() {
  const cardsInNew = useSelector((state) => state.card[CardStatus.NEW]);
  const cardsInProgress = useSelector(
    (state) => state.card[CardStatus.PROGRESS],
  );
  const cardsInFinished = useSelector(
    (state) => state.card[CardStatus.FINISHED],
  );

  return (
    <section>
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>
        Welcome to Trelloni
      </h1>

      <div>
        <CardMaker />

        <div className={styles['cards-container']}>
          <CardWrapper titleHeadline='New' cardsToPrint={cardsInNew} />

          <CardWrapper
            titleHeadline='In Progress'
            cardsToPrint={cardsInProgress}
          />

          <CardWrapper
            titleHeadline='Finished'
            cardsToPrint={cardsInFinished}
          />
        </div>
      </div>
    </section>
  );
}
