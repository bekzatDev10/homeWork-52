import { useState } from 'react';
import Card from './Cards';
import CardDeck from './lib/CardDeck';
import PokerHand from './lib/PokerHand';
import type PlayingCard from './lib/Card';

const App = () => {
  const [cards, setCards] = useState<PlayingCard[]>([]);
  const [outcome, setOutcome] = useState('');
  const dealCards = () => {
    const deck = new CardDeck();
    const hand = deck.getCards(5);
    setCards(hand);
    const pokerHand = new PokerHand(hand);
    setOutcome(pokerHand.getOutcome());
  };
  return (
      <div className="playingCards faceImages">
        <button onClick={dealCards}>Раздать карты</button>

        <div>
          {cards.map((card, index) => (
              <Card
                  key={`${card.suit}-${card.rank}-${index}`}
                  rank={card.rank}
                  suit={card.suit}
              />
          ))}
        </div>
        {outcome && <p>{outcome}</p>}
      </div>
  );
};

export default App;