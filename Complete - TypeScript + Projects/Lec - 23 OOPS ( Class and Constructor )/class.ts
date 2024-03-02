class Persons {
    name: string;
    age: number;
    hobbies : string[] ;

    constructor (name:string,age:number,hobbies:string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;

    }
}


const person1:Persons = new Persons("Ritik",13,["enjoy","hello"]) ;
const person2:Persons = new Persons("Rishabh",23,["enjoy","kaise ho"]) ;
console.log(Persons, person1.age);
