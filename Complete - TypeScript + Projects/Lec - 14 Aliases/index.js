var person = {
    name: "Rishabh Raj",
    age: 22,
    College: "LPU",
    Address: {
        Town: " Ramnagar",
        state: "Bihar"
    }
};
console.log(person.name);
console.log(person.Address.Town);
// Update the Data
// person.Address.State = " Punjab" ;
// console.log(person.Address.State)
// person.Address.state = 123 ;
console.log(person.Address.state);
var Calculator = function (person) {
    return "".concat(person.name, " and his homeTown is ").concat(person.Address.Town);
};
console.log(Calculator(person));
