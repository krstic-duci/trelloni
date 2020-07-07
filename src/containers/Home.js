import React from 'react';
import { useSelector } from 'react-redux';
import { CardStatus } from '../constants';
import styles from '../css/home.module.css';
import CardWrapper from '../components/card/CardWrapper';
import CardMaker from '../components/card/CardMaker';

export default function Home() {
  const cards = useSelector((state) => state.card.cards);

  const cardsInNew = cards.filter((elem) => elem.status === CardStatus.NEW);
  const cardsInProgress = cards.filter(
    (elem) => elem.status === CardStatus.PROGRESS,
  );
  const cardsInFinished = cards.filter(
    (elem) => elem.status === CardStatus.FINISHED,
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
