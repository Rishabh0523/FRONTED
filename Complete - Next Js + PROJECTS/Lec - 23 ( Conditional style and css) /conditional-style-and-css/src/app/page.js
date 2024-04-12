"use client"

import { useState } from "react";
import style from "./style.module.css";

export default function Home() {
  const [color,setColor] = useState("red");
  return (
<main>
<h1 className={color=="red" ? style.red:style.green}>Style and Css with Next Js</h1>
<button onClick={()=> setColor("green")}>Click Me</button>
{/* <h2 className{}>Style with Next Js</h2> */}
<h2 style={{backgroundColor:color=='red'?'red':'green'}}>Heading 2</h2>
<h3 id={style.orange}>Heading 3</h3>
    </main>
  );
}