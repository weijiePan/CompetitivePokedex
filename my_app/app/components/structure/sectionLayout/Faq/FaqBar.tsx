'use client'
import "./FaqBar.css";
import {useState} from "react";
import TriangleBtn from "../../../interactivity/buttons/TriangleBtn";
export default function FaqBar({info}:{info:{question:string, answer:string}}){
    let [isToggle, setToggle] = useState(false);
    function callBack(){
        setToggle(isToggle?false:true);
    }
    return(
            <div className = "faqBar">
                <div className = "question">
                    <h3>{info.question}</h3>
                    <TriangleBtn parentCallBack={callBack}></TriangleBtn>
                </div>
                {isToggle? <div className = "answer">{info.answer}</div>:null}
            </div>

    )
}