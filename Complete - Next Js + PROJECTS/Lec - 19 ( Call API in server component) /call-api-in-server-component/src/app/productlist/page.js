"use client"

async function productList() {
    let data = await fetch(" http://localhost:3000")
    data = await data.json();

    return data.products;
}

export  async  function Page () {
let products = await productList();
console.log(product);
    return(
        <div>
            <h1>Product List</h1>

            {
                products.map((item) =>(
                    <div>
                        <h3>item.title</h3>
                         </div>
                ))
            }
        </div>
    )
}