/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position
let thorX = initialTx;
let thorY = initialTy;

// game loop
while (true) {

  const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

  let instructionX = ""
  let instructionY = ""

  if (thorX < lightX) {
    instructionX = "E";
    thorX++;
  }
  if (thorX > lightX) {
    instructionX = "W";
    thorX--;
  }

  if (thorY < lightY) {
    instructionY = "S";
    thorY++;
  }
  if (thorY > lightY) {
    instructionY = "N";
    thorY--;
  }

  // Write an action using console.log()
  // To debug: console.error('Debug messages...');

  // A single line providing the move to be made: N NE E SE S SW W or NW
  print(instructionY + instructionX);
}