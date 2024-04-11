"use client"

import Image from "next/image";
import Profile from "../../public/vercel.svg"
export default function Home() {
  return (
    <main>
      <h1>Image Optimization</h1>
      {/* <Image
      src={Profile}
      alt="nothing"
      /> */}

      <Image
      src={"https://static.toiimg.com/thumb/msid-109093664,width-400,resizemode-4/109093664.jpg"}
      alt="no"
      height={600}
      width={600}
      />
    </main>
  )
}