/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const LON = readline(); // User longitude {string}
const LAT = readline(); // User latitude {string}
const N = parseInt(readline()); // Numbers of defibrilators {number}

const userLongitude = format(LON)
const userLatitude = format(LAT)
let currentMin = undefined;
let closestDefibrilator = undefined;

for (let i = 0; i < N; i++) {
  const DEFIB = readline();
  //1-Get defibrilator coordinates
  let defibLongitude = format(DEFIB.split(';')[4])
  let defibLatitude = format(DEFIB.split(';')[5])
  //2-Calculate distance from user
  let distance = calculateDistance(userLongitude, defibLongitude, userLatitude, defibLatitude)
  //3-Compare distances and set defibrillator name
  if (!currentMin) {
    currentMin = distance;
    closestDefibrilator = DEFIB.split(';')[1]
  }
  if (distance < currentMin && distance > 0) {
    currentMin = distance;
    closestDefibrilator = DEFIB.split(';')[1]
  }
}

function format(string) {
  let a = string.replace(',', '.') //Replace commas by dots
  let b = parseFloat(a) //Convert string into number
  return b * Math.PI / 180; //Convert degrees into radians
}

function calculateDistance(longitudeA, longitudeB, latitudeA, latitudeB) {
  let x = (longitudeB - longitudeA) * Math.cos((latitudeA + latitudeB) / 2)
  let y = (latitudeB - latitudeA)
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(closestDefibrilator);

// 75% validation, weird behavior of test 2, other tests pass