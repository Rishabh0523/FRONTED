// The function call signature refers to the declaration or definition of a function ,
//  which includes the function's name , parameters , and return type . 
//It define the structure and type information of a function without including the function's implementattion or body
var student1 = {
    name: "Rishabh",
    age: 22
};
var introduction = function (student1) {
    var name = student1.name, age = student1.age;
    return "welcome my name is ".concat(name, " and my age i s ").concat(age);
};
console.log(introduction(student1));
