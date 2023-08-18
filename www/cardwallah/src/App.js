import { useState } from 'react';
import './App.css';
import AuthBTN from './AuthBTN';
import CardList from './CardList';
import NewCardForm from './NewCardForm';

export default function MyApp() {
  const [cards, setCardList] = useState([
    {id: 1, title: 'Card 1', status: 1},
    {id: 2, title: 'Card 2', status: 1},
    {id: 3, title: 'Card 3', status: 1},
    {id: 4, title: 'Card 4', status: 1},
  ]);
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col text-center">
          <h1>CardWallah</h1>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <div class="btn-group">
            <AuthBTN />
          </div>
        </div>
      </div>
      <NewCardForm />
      <CardList cards={cards} />
    </div>
  );
}
