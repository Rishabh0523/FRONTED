"use client"

import Link from "next/link";
import styles from "./page.module.css";


export default function Home() {


  return (
<main>

    <h1>This is my first Page </h1>
     
     <Link href="/productlist">Go to Product List</Link>
       
          
    </main>
  );
}
