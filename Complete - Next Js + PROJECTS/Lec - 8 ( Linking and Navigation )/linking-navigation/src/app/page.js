"use client"

import styles from "./page.module.css";
import Link from 'next/link' ;
import {useRouter} from 'next/navigation'


export default function Home() {

  const router = useRouter();
  const navigate=(name) => {
  router.push(name)
 }
  return (
    <main className={styles.main}>
      
      <h1>Linking And Navigation </h1>
     
     <Link href="/login">Go to login page</Link>

     <Link href="/about">Go to about page</Link>

     <button onClick={() =>navigate("/login")}>Go to login page</button>  
     <button onClick={() =>navigate("/about")}>Go to about page</button>  
          
    </main>
  );
}
