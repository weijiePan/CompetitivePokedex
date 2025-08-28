import Link from "next/navigation"
import "./RectangleBtn.css"
import { MouseEventHandler } from "react";
import { Roboto } from 'next/font/google'
import { Inter } from "next/font/google";
const roboto = Roboto({subsets:["latin"]});
function RectangleBtn({ className, text, action}: {className:string, text:string, action: MouseEventHandler}) {//action takes either a link or a callback
    return(
        <button value = {text} className = {`rectangleBtn ${className} ${roboto.className}`   } type="button" onClick={action}>{text}</button>
    )
}
export default RectangleBtn;