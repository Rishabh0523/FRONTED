const numbers:number[] = [1,2,3,4,5]


// MAP Methods

// Double the number 

// const doubleData:number[] = numbers.map((curVal:number) =>curVal *2);
// console.log(doubleData);

// Number to string 

// const numberToString:string[] =numbers.map((currElm:number) => currElm.toString())
// console.log(numberToString)

// Filter Methods

// const greater:number[] =numbers.filter((currElm:number) => currElm > 3)
//  console.log(greater);

 const evenNUmber:number[] = numbers.filter((element:number) => element % 2  === 0);
 console.log(evenNUmber)