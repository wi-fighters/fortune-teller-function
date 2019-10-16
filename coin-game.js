// blueprint for a coin
class Coin {
    constructor(face = 'heads') {
        this.face = face;
    }

    flip() {
        // generate a random integer between 0 and 1, inclusive
        this.face = Math.floor(Math.random() * (1 - 0 + 1)) + 0 ? 'heads' : 'tails';
        console.log(`Flipped: ${this.face}`);
        return this.face;
    }
}

// blueprint for a player
class Player {
    // score is an optional parameter
    constructor(name, score = 0) {
        this.name = name;
        this.score = score;
    }

    sayHey() {
        console.log('hey');
    }

    makeGuess(face) {
        this.guess = face;
        console.log(`${this.name} guesses ${this.guess}`);
    }
}

// blueprint for a game
class Game {
 // if no coin is provided, create a brand new one right now
    constructor(playerOne, playerTwo, coin = new Coin()) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.coin = coin;
    }

    announceWinner() {
        if (this.coin.face === this.playerOne.guess) {
            console.log(`${this.playerOne.name} wins!`);
        } else {
            console.log(`${this.playerTwo.name} wins!`);
        }
    }

    play(player, face) {
        player.makeGuess(face);
        this.coin.flip();
        this.announceWinner();
    }

}

// instantiate (create) players
const ada = new Player('Ada');
const charles = new Player('Charles');

// optionally, instantiate (create) and provide your own coin
// const euro = new Coin();
// const someGame = new Game(ada, charles, euro);

const someGame = new Game(ada, charles);
someGame.play(ada, 'tails');


// some coin tests in case you want to experiment
// const dollar = new Coin();
// euro.flip()
// euro.face
// dollar.flip()
// dollar.face
