// blueprint for a coin
class Coin {
    constructor(face) {
        this.face = face;
    }

    flip() {
        // generate a random integer between 0 and 1, inclusive
        this.face = Math.floor(Math.random() * (1 - 0 + 1)) + 0 ? 'heads' : 'tails';
        console.log(`Flipped: ${this.face}`);
        return this.face;
    }
}

const euro = new Coin('heads');
console.log('euro.face:', euro.face);

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

// this is what a new instance of Player looks like... forgetting makeGuess for now
// const ada = {
//     name: 'Ada',
//     score: 0,
//     sayHey: function() { console.log('hey'); },
// };

const charles = new Player('Charles');
const blorpa = new Player('Blorpa');

// console.log('Ada says hey: ');
// ada.sayHey();

console.log('Charles says hey: ');
charles.sayHey();
console.log(`omg ${charles.name} cheated at the coin game with ${charles.score} points!`);
