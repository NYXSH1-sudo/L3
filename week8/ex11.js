
const readline = require("readline");

const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

var array = [];
var x     = 0;

function add_item_to_array(value) {
  array[x] = value;
  console.log("Element: " + array[x] + " added at index " + x);
  x++;
}

function display_array() {
  console.log("-------------------");
  for (var y = 0; y < array.length; y++) {
    console.log("Element " + y + " = " + array[y]);
  }
  console.log("-------------------");
}

function menu() {
  rl.question('\nEnter "add" to add item, "display" to show array, "exit" to quit: ', function(choice) {
    if (choice === "add") {
      rl.question("Enter value to add: ", function(val) {
        add_item_to_array(val);
        menu();
      });
    } else if (choice === "display") {
      display_array();
      menu();
    } else if (choice === "exit") {
      console.log("Goodbye!");
      rl.close();
    } else {
      console.log("Invalid option.");
      menu();
    }
  });
}

menu();