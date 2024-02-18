type Person = {
    name : string;
    age: number;
    College:string;
    class? : string // It is optional 
    Address:{Town:string; state:string}
}

const person:Person = {
  name : "Rishabh Raj",
  age : 22,
  College : "LPU",

  Address: {

  Town : " Ramnagar",
  state : "Bihar"
  }
}

console.log(person.name)
console.log(person.Address.Town)

// Update the Data

// person.Address.State = " Punjab" ;
// console.log(person.Address.State)

// person.Address.state = 123 ;
console.log(person.Address.state)

const Calculator = (person:Person) => {
  return `${person.name} and his homeTown is ${person.Address.Town}`
}

console.log(Calculator(person));