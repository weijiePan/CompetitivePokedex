import { ReactNode } from "react"
import "./oneColumnPage.css"
export default function OneColumnPage({sections}: {sections?:{node:ReactNode, height:string}[]}){
    const divSections = sections?.map((section) =>{
        return(<div className = "section" style={{height:section.height}}>{section.node}</div>);
    })
    return(
        <div className = "oneColumnPage">
            {divSections}
        </div>
    )
    
}