import React from 'react';
import CardSingle from '../components/CardSingle';

export default function CardWrapper({ titleHeadline, cardsToPrint }) {
  return (
    <section>
      <h2>{titleHeadline}</h2>
      {cardsToPrint.map((elem) => (
        <CardSingle
          titleCard={elem.title}
          key={elem.id}
          id={elem.id}
          status={elem.status}
          txtArea={elem.txtArea}
        />
      ))}
    </section>
  );
}
