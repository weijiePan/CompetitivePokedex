'use client'
import {useRouter} from "next/navigation"
import { MouseEventHandler } from "react";


import "./RectangleBtn.css";

export default function NavBtn({ className, text, action}: {className:string, text:string, action: string}) {//action takes either a link or a callback
    const router = useRouter();    
    const changeUrl = function(action:string){
        router.replace(action);
    }
    return(
        <button value = {text} className = {`rectangleBtn ` + className} type="button" onClick={() => changeUrl}>{text}</button>
    )
}