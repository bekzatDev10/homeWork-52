type Props = {
    rank: string;
    suit: string;
};

const Card = (props: Props) => {
    let symbol: string;
    if (props.suit === 'diams') {
        symbol = '♦';
    } else if (props.suit === 'hearts') {
        symbol = '♥';
    } else if (props.suit === 'spades') {
        symbol = '♠';
    } else {
        symbol = '♣';
    }
    const cardClasses =`card rank-${props.rank.toLowerCase()} ${props.suit}`;
    return (
         <span className={cardClasses}>
      <span className="rank">{props.rank.toUpperCase()}</span>
      <span className="suit">{symbol}</span>
         </span>
    );
};

export default Card;