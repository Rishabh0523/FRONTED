"use client"

import {useRouter} from 'next/navigation'
import Link from 'next/link';

const About = () => {
    const router = useRouter();
    return (
        <div>
              <h1>About Page </h1>
              <button onClick={() =>router.push("/")}>Go to Home page</button>  

              <Link href="/about/aboutcollege">Go to about College page</Link>
              <Link href="/about/aboutstudent">Go to about student page</Link>

        </div>
    )
}

export default About ;