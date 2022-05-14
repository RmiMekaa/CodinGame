/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let players = [];
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  var inputs = readline().split(' ');
  const NUMPLAYER = parseInt(inputs[0]);
  const SIGNPLAYER = inputs[1];
  players.push({
    id: NUMPLAYER,
    sign: SIGNPLAYER,
    opponents: []
  })
}

let tournamentWinner = undefined;
const rules = {
  R: ['L', 'C'],
  P: ['R', 'S'],
  C: ['P', 'L'],
  L: ['S', 'P'],
  S: ['C', 'R']
}

// Play rounds until there is only one player left
while (players.length > 1) {
  for (let i = 0; i < players.length - 1; i++) {
    let winner = playRound(players[i], players[i + 1])
    let loser = (winner === players[i]) ? players[i + 1] : players[i]
    winner.opponents.push(loser.id) //Add loser id to winner's opponents array
    players = players.filter(player => player.id !== loser.id) //Remove loser from players array
  }
}

// The winner is the player which remains in the array at the end of the loop
tournamentWinner = players[0];

// Returns the winner of the round
function playRound(player1, player2) {
  if (player1.sign === player2.sign) {
    return (player1.id < player2.id) ? player1 : player2;
  }
  if (rules[player1.sign].includes(player2.sign)) return player1
  return player2;
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(tournamentWinner.id)
console.log(tournamentWinner.opponents.join(' '))