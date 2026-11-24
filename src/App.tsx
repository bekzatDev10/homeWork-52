import { useState } from 'react';
import Card from './Cards';
import CardDeck from './lib/CardDeck';
import type PlayingCard from './lib/Card';

const App = () => {
  const [cards, setCards] = useState<PlayingCard[]>([]);

  const dealCards = () => {
    const deck = new CardDeck();
    const hand = deck.getCards(5);
    setCards(hand);
  };
  return (
      <div className="playingCards faceImages">
        <button onClick={dealCards}>Раздать карты</button>

        <div>
          {cards.map((card, index) => (
              <Card
                  key={`${card.suit}-${card.rank}-${index}`}
                  rank={card.rank}
                  suit={card.suit}/>
          ))}
        </div>
      </div>
  );
};

export default App;