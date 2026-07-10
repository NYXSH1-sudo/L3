
const readline = require("readline");

const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

function calculateArea(length, breadth) {
  return length * breadth;
}

rl.question("Enter Length:  ", function(l) {
  rl.question("Enter Breadth: ", function(b) {
    var length  = parseFloat(l.trim());
    var breadth = parseFloat(b.trim());
    var area    = calculateArea(length, breadth);

    console.log("Length:  " + length);
    console.log("Breadth: " + breadth);
    console.log("Area:    " + area);

    rl.close();
  });
});