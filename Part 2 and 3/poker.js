
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.discards = [];
        let suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        for (let suit of suits) {
            for (let i = 0; i < ranks.length; i++) {
                this.cards.push(new Card(suit, ranks[i], i+2));
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}


class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    draw(deck, count = 1) {
        for (let i = 0; i < count; i++) {
            this.hand.push(deck.cards.shift());
        }
    }

    discard(index) {
        deck.discards.push(this.hand.splice(index, 1)[0]);
    }
    
    getHandValue() {
        return this.hand.reduce((a, b) => a + b.value, 0);
    }
}

class Dealer extends Player {
    constructor() {
        super('Dealer');
    }
    
    shuffle(deck) {
        deck.shuffle();
    }

    deal(deck, players, cardsEach) {
        for (let i = 0; i < cardsEach; i++) {
            for (let player of players) {
                player.draw(deck);
            }
        }
    }
}


class HandValidator {
    static validate(players) {
        for (let player of players) {
            console.log(player.name + "'s hand value: " + player.getHandValue());
        }
    }
}

class Game {
    constructor() {
        this.players = [];
        this.dealer = new Dealer();
        this.deck = new Deck();
    }
    
    addPlayer(name) {
        this.players.push(new Player(name));
    }
    
    startGame() {
        this.dealer.shuffle(this.deck);
        this.dealer.deal(this.deck, this.players, 5);
        HandValidator.validate(this.players);
    }
}

