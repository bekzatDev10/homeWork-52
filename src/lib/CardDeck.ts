import Card from './Card';

class CardDeck {
    public cards: Card[] = [];

    private suits: string[] = ['clubs', 'spades', 'diams', 'hearts'];
    private ranks: string[] = [
        '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
    ];

    constructor() {
        for (const suit of this.suits) {
            for (const rank of this.ranks) {
                const card = new Card(rank, suit);
                this.cards.push(card);
            }
        }
    }

    public getCard(): Card {
        const index = Math.floor(Math.random() * this.cards.length);
        const card = this.cards.splice(index, 1)[0];

        if (!card) {
            throw new Error('В колоде закончились карты');
        }

        return card;
    }
    public getCards(howMany: number): Card[] {
        const hand: Card[] = [];

        for (let i = 0; i < howMany; i++) {
            hand.push(this.getCard());
        }
        return hand;
    }
}
export default CardDeck;