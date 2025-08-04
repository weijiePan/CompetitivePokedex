'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
export default function NavLinks(){
    const pathName = usePathname();
    return(
        <nav className = "top-nav flexbox-horizontal">  
            <Link href="/"><p>Home</p></Link>
            <Link href="team"><p>team</p></Link>
        </nav>
    )
}