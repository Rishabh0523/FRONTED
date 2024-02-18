
// Default Parameter 

// const greet = (name:string , id:number = 1):string => {
//    return `Welcome ${name} and your id is ${id}`
// }

// const result = greet("Rishabh");
// console.log(result)

// Optional Parameter

const greet = (name:string , id?:number):string => {
    if(id){
        return `Welcome ${name} and your id is ${id}`
    }
    else{
        return `Welcome ${name}`
    }
    }
   
 
const result = greet("Rishabh");
 const result2 = greet("Rishabh",2);
 console.log(result);
 console.log(result2);
 