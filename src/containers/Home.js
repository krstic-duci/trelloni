import React from 'react';
import { useSelector } from 'react-redux';
import CardWrapper from '../components/card/CardWrapper';
import CardMaker from '../components/card/CardMaker';
import {
  getCardsInNew,
  getCardsInProgress,
  getCardsInFinished,
} from '../store/selectors/selectors';
import styles from '../css/home.module.css';

export default function Home() {
  const cardsInNew = useSelector(getCardsInNew);
  const cardsInProgress = useSelector(getCardsInProgress);
  const cardsInFinished = useSelector(getCardsInFinished);

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
