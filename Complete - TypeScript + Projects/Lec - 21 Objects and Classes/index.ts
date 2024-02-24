

// interface Greet{

//     name:string;
//     age:number
// }

// const greets:Greet= {
//     name :"Rishabh",
//     age : 23
// }

// Creating a product 

interface Product {
    name: string;
    price:number;
    quantity : number
}

const products:Product ={
    name : "Macbook",
    price : 99,
    quantity :4
}


// Calculate total price 

const TotalPrice : (product : any) => number = (product:Products):number => {
    const {price,quantity} = products;
    return product*price;
}

console.log(TotalPrice(products:products))
