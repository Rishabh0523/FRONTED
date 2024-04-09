import Link from "next/link";
import './login.css';
export default function Layout({children}) {
    return(
        <div>
        <ul className="login-menu">
            <h4>Login to Navbar </h4>
            <li>
                <Link href="/login">Login Main</Link>
                </li>

                <li>
                <Link href="/login/loginstudent">Student Main</Link>
                </li>

                <li>
                <Link href="/login/loginteacher">Teacher Login Main</Link>
            </li>
        </ul>

        {
            children
        }
        </div>
    )}