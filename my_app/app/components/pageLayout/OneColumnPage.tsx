import { ReactNode } from "react"
import "./oneColumnPage.css"
export default function OneColumnPage({navbar, sections}: {navbar:ReactNode, sections:ReactNode[]}){
    const divSections = sections.map((section) =>{
        return(<div className = "section">{section}</div>);
    })
    return(
        <div className = "oneColumnPage">
            <div className = "navbar section"></div>
            {divSections}
        </div>
    )
    
}