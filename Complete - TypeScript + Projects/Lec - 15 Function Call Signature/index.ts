// The function call signature refers to the declaration or definition of a function ,
//  which includes the function's name , parameters , and return type . 
//It define the structure and type information of a function without including the function's implementattion or body

type Student = {
    name :string;
    age : number;
    gender ? : string ;
    greet: (country:string) => string // Method call signature

}

const student1:Student = {
    name :"Rishabh",
    age : 22,
    greet: (country):any => `welcome my name is ${name} and my age is ${age} and my country is ${country}`

}

const introduction : (Student1:Student) => string = (student1:Student):string => {
    const {name,age} = student1;
    return `welcome my name is ${name} and my age i s ${age}`
}

console.log(introduction(student1))