
// b();

// Here hoisting will play the major role and error will come because we are assigning the var b to the function 

var b = function () {
  console.log("b is called");
}

b();

