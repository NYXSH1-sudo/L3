
const readline = require("readline");

const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

rl.question("Enter Your Name: ", function(name) {
  rl.question("Enter Your Student ID: ", function(studentId) {
    console.log("\n--- Output ---");
    console.log("Name:       " + name);
    console.log("Student ID: " + studentId);
    rl.close();
  });
});