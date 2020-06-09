import React from 'react';
import CardSingle from '../components/CardSingle';

export default function Cards({ titleHeadline, cardsToPrint }) {
  return (
    <section>
      <h2>{titleHeadline}</h2>
      {cardsToPrint.map((elem, i) => (
        <CardSingle titleCard={elem.title} key={i} />
      ))}
    </section>
  );
}
