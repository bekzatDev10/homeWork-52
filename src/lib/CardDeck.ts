import Card from './Card';
class CardDeck {
    public cards: Card[] = [];
    private suits: string[] = ['clubs', 'spades', 'diams', 'hearts'];
    private ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    constructor() {
        for (const suit of this.suits) {
            for (const rank of this.ranks) {
                const card = new Card(rank, suit);
                this.cards.push(card);
            }
        }
    }
}

export default CardDeck;