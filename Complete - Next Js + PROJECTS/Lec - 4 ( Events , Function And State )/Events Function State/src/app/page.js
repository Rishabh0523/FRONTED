'use client'
import { useState } from "react";
import styles from "./page.module.css";


export default function Home() {
  const [name , setName] = useState("Rishabh")
  const rishu = () => {
  
    setName("Rishu")
    // alert(item)
  }

  const component = () => {
    return 
    <>
      <h1>Hello</h1>
    </>
      
    
  }
  

  return (
    <main className={styles.main}>
      <h1> Events , Functions and State {name}</h1>
      <button onClick={() =>rishu() }>Click me</button>
      <component/>
    </main>
  );
}

