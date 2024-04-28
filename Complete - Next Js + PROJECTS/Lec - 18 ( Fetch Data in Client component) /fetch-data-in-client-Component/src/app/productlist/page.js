'use client'

import { useEffect , useState} from "react"

export default function ProductList() {

    useEffect((async) => {
        const [product , setProduct] = useState([])

        let data= await fetch("https://dummyjson.com/products");
        data = await data.json();
        console.log(data);
        setProduct(data.product)
    },[])

    return(
        <div>
            <h1> Product Lists </h1>

            {
                product.map((item) =>(
                    <h3>{item.title}</h3>
                ))
            }
        </div>
    )
}
