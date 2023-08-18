import React from "react";
import Card from './Card';

export default function CardList({ cards }) {
  return (
    <>
      <div class="row">
        <div class="col text-center">
          <div class="cards--count">{ cards.length } cards</div>
          <div class="row align-item-start">
            {cards.map(card => {
              return <Card key={card.id} card={ card } />
            })}
          </div>
        </div>
      </div>
    </>
    );
}