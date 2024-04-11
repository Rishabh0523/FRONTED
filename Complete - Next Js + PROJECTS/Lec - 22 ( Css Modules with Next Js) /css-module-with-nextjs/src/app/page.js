"use client"

import custom from "./custom.module.css";
import other from "./other.module.css"
export default function Home() {
  return (
<main>
<h1 className={custom.main}>Style and Css with Next Js</h1>
<h2 className={other.main}>Heading 2</h2>
    </main>
  );
}