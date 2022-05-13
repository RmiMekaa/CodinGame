/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const horses = [];
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  const pi = parseInt(readline());
  horses.push(pi)
}

// Returns minimum difference between two pair in an array
function getMinDiff(arr) {
  arr.sort((a, b) => a - b); // Sort array
  let minDiff = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
  }
  return minDiff;
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(getMinDiff(horses));