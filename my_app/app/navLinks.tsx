"use client"
import Link from "next/link";
import localFont from "next/font/local";
 const Mozilla = localFont(
        {
            src:"/fonts/MozillaHeadline/MozillaHeadline_Expanded-Regular.ttf"
        }
    )
export default function NavLinks(){
   
    
    return(
        <nav className = "top-nav flexbox-horizontal">  
            <Link href="/"><p className= {`${Mozilla.className}`}>Home</p></Link>
            <Link href="team" ><p className= {`${Mozilla.className}`}>team</p></Link>
        </nav>
    )
}