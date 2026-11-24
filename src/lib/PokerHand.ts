import Card from './Card';

class PokerHand {
    private cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }
    public getOutcome(): string {
        let pairCount = 0;
        let hasThree = false;
        for (let i = 0; i < this.cards.length; i++) {
            let rankWasChecked = false;
            for (let j = 0; j < i; j++) {
                if (this.cards[i].rank === this.cards[j].rank) {
                    rankWasChecked = true;
                }
            }

            if (rankWasChecked) {
                continue;
            }
            let sameRankCount = 0;

            for (const card of this.cards) {
                if (card.rank === this.cards[i].rank) {
                    sameRankCount++;
                }
            }

            if (sameRankCount === 2) {
                pairCount++;
            } else if (sameRankCount === 3) {
                hasThree = true;
            }
        }
        let sameSuit = this.cards.length > 0;
        for (const card of this.cards) {
            if (card.suit !== this.cards[0].suit) {
                sameSuit = false;
            }
        }
        if (sameSuit) {
            return 'Флэш';
        }
        if (hasThree) {
            return 'Тройка';
        }
        if (pairCount === 2) {
            return 'Две пары';
        }
        if (pairCount === 1) {
            return 'Одна пара';
        }
        return 'Старшая карта';
    }
}

export default PokerHand;