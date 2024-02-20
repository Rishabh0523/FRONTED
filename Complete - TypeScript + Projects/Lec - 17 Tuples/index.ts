// Tuples : Tuples are a data structures that allows you to store a fixed - size collection of different types . 
// They are similar to arrays , but with a key difference : 
// the types of elements in a tuple are fixed and declared at the time of creation , whereas arrays can hold elements of the same types , and their  size can vary .



type PersonInfo = [string , number , boolean ]

const displayPersonInfo :(person: PersonInfo) => void =(person:PersonInfo)
:void => {
    const [name,age,hasLice] = person;
    console.log(...data: `Name:${name} , Age:${age}, hasLiceYesorNo :${hasLice} ? "yes" : "No" `);
}

person1.push(...items , "coading")

const person1:PersonInfo = ['Rishabh' , 22 , true];
const person2:PersonInfo = ['Rishu' , 21 , false];

displayPersonInfo(person:person1)
displayPersonInfo(person:person2)