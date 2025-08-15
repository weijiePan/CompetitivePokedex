import Link from "next/navigation"
import "./rectangleBtn.css"
import { MouseEventHandler } from "react";
function RectangleBtn({ className, text, action}: {className:string, text:string, action: MouseEventHandler}) {//action takes either a link or a callback
    return(
        <button value = {text} className = {`rectangleBtn ` + className} type="button" onClick={action}>{text}</button>
    )
}
export default RectangleBtn;