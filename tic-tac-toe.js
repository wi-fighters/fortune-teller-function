const board = [
    [null,  'o',    'x'],
    ['x',   'o',    null],
    [null,  null,   null]
];

const players = ['Juan', 'Marlon'];

console.log('Before any moves, the board looks like this:\n');

printBoard();

// make the first move
console.log(`\n${players[0]} makes a move!`);

board[2][1] = 'o';

console.log('Now the board looks like this:\n');

printBoard();

// make the second move
console.log(`\n${players[1]} makes a move!`);

board[2][2] = 'x';

console.log('Now the board looks like this:\n');

printBoard();

// Since func declarations are hoisted into memory before functions are called,
// We are able to call printBoard() before declaring it
function printBoard() {
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
}
