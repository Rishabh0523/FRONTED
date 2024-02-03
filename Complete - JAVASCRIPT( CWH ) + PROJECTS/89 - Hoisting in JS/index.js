let b;
// Following two lines will run successfully due to JavaScript hoisting
console.log(b)
greet()
var greet = function() {
  console.log("Good morning")
}

var a = 9; // Declaration hoisted to the top but initialization is not
console.log(a)