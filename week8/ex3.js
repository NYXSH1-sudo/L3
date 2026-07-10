
const readline = require("readline");

const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

rl.question("Enter your marks (0-100): ", function(input) {
  var marks = parseInt(input);

  if (marks >= 80 && marks <= 100) {
    console.log("Result: Distinction");
  } else if (marks >= 60 && marks < 80) {
    console.log("Result: First Division");
  } else if (marks >= 50 && marks < 60) {
    console.log("Result: Second Division");
  } else if (marks >= 40 && marks < 50) {
    console.log("Result: Third Division");
  } else if (marks >= 0 && marks < 40) {
    console.log("Result: Fail");
  } else {
    console.log("Invalid marks entered.");
  }

  rl.close();
});