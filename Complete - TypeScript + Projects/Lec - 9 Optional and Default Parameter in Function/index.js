// Default Parameter 
// const greet = (name:string , id:number = 1):string => {
//    return `Welcome ${name} and your id is ${id}`
// }
// const result = greet("Rishabh");
// console.log(result)
// Optional Parameter
var greet = function (name, id) {
    if (id) {
        return "Welcome ".concat(name, " and your id is ").concat(id);
    }
    else {
        return "Welcome ".concat(name);
    }
};
var result = greet("Rishabh");
var result2 = greet("Rishabh", 2);
console.log(result);
console.log(result2);
