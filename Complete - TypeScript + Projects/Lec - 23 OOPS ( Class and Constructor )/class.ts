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


const person1:Persons = new Persons("Ritik",13,["enjoy","moj"]) ;
const person2:Persons = new Persons("Ritik",13,["enjoy","moj"]) ;
console.log(Persons, person1.age);