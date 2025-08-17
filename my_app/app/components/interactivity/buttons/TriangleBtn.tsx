'use client'
import "./TriangleBtn.css";
import Image from "next/image";
import { useState } from "react";

export default function TriangleBtn({parentCallBack}:{parentCallBack:Function}) {
    let [isTurned, setTurn] = useState(false);
    function callBack(){
        parentCallBack();
        setTurn(isTurned?false:true);
    }
    return(
            <Image className = "TriangleBtn"style = {isTurned ? {transform:"rotate(180deg)"}: {}} onClick={callBack} src="./assets/ui/interactivity/btn/arrow.svg" width="100" height="100" alt="faq toggle arrow"></Image>
    )
}

//Image inside svg can cause hydration error