import { ReactNode } from "react"
import "./oneColumnPage.css"
export default function OneColumnPage({sections}: {sections?:{node:ReactNode, height:string, clsName?:string}[]}){
    const divSections = sections?.map((section) =>{
        return(<div key = {crypto.randomUUID()} className = {`section ${section.clsName?section.clsName:""}`} style={{height:section.height}}>{section.node}</div>);
    })
    return(
        <div className = "oneColumnPage">
            {divSections}
        </div>
    )
    
}