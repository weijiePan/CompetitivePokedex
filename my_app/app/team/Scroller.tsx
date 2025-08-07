"use client"
import "./Scroller.css"
import PkmonScrollIcon from "./PkmonScrollIcon"
export default function Scroller(){
    let scrollStart = 1;
    let scrollRange = 10;//number scrolled before loading
    let scrollIcons:any[] = [];
    for(let i = scrollStart; i < scrollRange; i++ ){
        scrollIcons.push(<PkmonScrollIcon key = {i} id = {i}></PkmonScrollIcon>)
    }
    return(
        <div className = "scroller">
            {scrollIcons}
        </div>
    )
}