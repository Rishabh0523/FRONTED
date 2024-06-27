'use client'

export default function Student({params}) {
    console.log(params)
    return(
        <div>
            <h1> Student Lists are here listed </h1>
            
            <h3>Name : {params.student}</h3>
        </div>
    ) 

}
