import Image from "next/image"
import "./SplitSection.css"
export default function SplitSection({img, imgRes, imgAlt, heading, descriptor, isImgLeft}:{img:string, imgRes:{height:number, width:number}, imgAlt: string, heading:string, descriptor:string, isImgLeft:Boolean}){
    const image = <Image className = "sideImage"src={img} width = {imgRes.width} height = {imgRes.height} alt = {imgAlt} ></Image>
    const description = <div className = "description">
        <h2>{heading}</h2>
        <p>{descriptor}</p>
    </div>
    if(isImgLeft){
        return(
            <div className = "Split Section">
                {image}
                {description}
            </div>
        )
    }else{
        return(
            <div className = "Split Section">
                {description}
                {image}            
            </div>
        )
    }
}