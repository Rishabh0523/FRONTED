'use client'

import Link from "next/link"
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();

   const  navigate = (page) => {
          router.push( "/login/" + page )
    }
    return (
        <div>
              <h1>Login Page </h1>
              <Link href="/"> Go to home page</Link>
 <br />
              <button onClick={() => navigate("loginstudent")}>Go to Student Login Page</button>
              <br />
              <br />
              <button onClick={() => navigate("loginteacher")}> Go to Teacher Login Page</button>
        </div>
    )
}

export default Login ;
