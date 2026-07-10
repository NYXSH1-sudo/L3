
var array = [1, 2, 3, 4, 5, 6];
var s = 0;
var p = 1;

for (var i = 0; i < array.length; i++) {
  s += array[i];
  p *= array[i];
}

console.log("Array:   [" + array.join(", ") + "]");
console.log("Sum:     " + s);
console.log("Product: " + p);