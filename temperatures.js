/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
let temperatures = readline().split(' ');
let positives = []
let negatives = []
let closestToZero;

if (temperatures[0] === '') closestToZero = 0;
else {
  for (let t of temperatures) {
    if (t > 0) positives.push(t)
    if (t < 0) negatives.push(t)
  }

  let closestPos = Math.min(...positives)
  let closestNeg = Math.max(...negatives)

  closestToZero = Math.abs(closestPos) < Math.abs(closestNeg) ? closestPos : closestNeg
  if (Math.abs(closestPos) === Math.abs(closestNeg)) closestToZero = closestPos;
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(closestToZero);