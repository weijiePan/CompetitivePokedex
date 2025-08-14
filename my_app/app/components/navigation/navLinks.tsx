"use client"
import Link from "next/link";
import localFont from "next/font/local";
export default function NavLinks(){
   
    
    return(
        <nav className = "top-nav flexbox-horizontal">  
            <Link href="/"><p className= {``}>Home</p></Link>
            <Link href="team" ><p className= {``}>team</p></Link>
        </nav>
    )
}