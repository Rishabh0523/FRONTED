import Link from "next/link";

export default function StudentList() {
    
    return(
        <div>
        <h1>Student List</h1>

        <ul>
            <li>
                <Link href="/studentlist/rishabh">Rishabh</Link>
            </li>

            <li> 
            <Link href="/studentlist/nishu">Nishu</Link>
               </li>

            <li> 
                 <Link href="/studentlist/jack">Jack</Link>
            </li>

            <li>
            <Link href="/studentlist/lala">Lala</Link>
             </li>
        </ul>
        </div>
    )
}