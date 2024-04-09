'use client'

import Link from "next/link"
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();

   const  navigate = (page) => {
          router.push("/login/" + page)
    }
    return (
        <div>
              <h1 className="heading">Login Page </h1>
              <Link href="/"> Go to home page</Link>
 <br />
              <button onClick={() => navigate("loginstudent")}>Go to Student login page</button>
              <br />
              <br />
              <button onClick={() => navigate("loginteacher")}>Go to Teacher login page</button>
        </div>
    )
}

export default Login ;