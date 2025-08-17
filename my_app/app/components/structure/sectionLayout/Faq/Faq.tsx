import "./Faq.css"
import FaqBar from "./FaqBar"
export default function Faq({infos}:{infos:{question:string, answer:string}[]}){
    return(
        <>
            {infos.map(
                (i)=> <FaqBar info = {i}></FaqBar>
            )}
        </>
    )
}