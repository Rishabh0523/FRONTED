// Union --> pipe (/)
// Intersection --> &

// const inputValue :  (value:string | number | boolean  = (value:string |number | boolean) :void ):void  {}


// inputValue(value:55)
// inputValue(value: "hello world")
// inputValue(value:true)


// const userInput : (value:string | number) => ... = (value: string | number ):string | number => {
//     if (typeof value === "number"){
//         return value *2;
//     }
// }

// console.log(userInput(value:10));
// console.log(userInput(value:"Subscribe"));

function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${typeof padding}'.`);
  }
   
  padLeft("Hello world", 4);