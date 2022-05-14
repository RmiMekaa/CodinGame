/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let results = []
let table = {};
const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.
for (let i = 0; i < N; i++) {
  var inputs = readline().split(' ');
  const EXT = inputs[0]; // file extension
  const MT = inputs[1]; // MIME type
  table[EXT.toLowerCase()] = MT
}

for (let i = 0; i < Q; i++) {
  const FNAME = readline(); // One file name per line.
  let extension = getExtension(FNAME) // Get file extension
  let mimeType = getMimeType(extension) // Get MIME type
  results.push(mimeType) // Push MIME type in results array
}

function getExtension(fileName) {
  if (!fileName.includes('.')) return
  return fileName.slice(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();
}

function getMimeType(extension) {
  if (extension === undefined || !table[extension]) return 'UNKNOWN'
  return table[extension]
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
for (let i = 0; i < results.length; i++) {
  console.log(results[i]);
}