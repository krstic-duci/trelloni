import React from 'react';
import { useSelector } from 'react-redux';
import { CardStatus } from '../constants';
import styles from '../css/home.module.css';
import Cards from './Cards';
import CardMaker from '../components/CardMaker';

export default function Home() {
  const cards = useSelector((state) => state.cardReducer.cards);
  const cardsInNew = cards.filter((elem) => elem.status === CardStatus.NEW);
  const cardsInProgress = cards.filter(
    (elem) => elem.status === CardStatus.PROGRESS,
  );
  const cardsInFinished = cards.filter(
    (elem) => elem.status === CardStatus.FINISHED,
  );
  return (
    <section>
      <h1>Welcome to Trelloni</h1>

      <div>
        <CardMaker />

        <div className={styles['cards-container']}>
          <Cards titleHeadline='New' cardsToPrint={cardsInNew} />

          <Cards titleHeadline='In Progress' cardsToPrint={cardsInProgress} />

          <Cards titleHeadline='Finished' cardsToPrint={cardsInFinished} />
        </div>
      </div>
    </section>
  );
}
