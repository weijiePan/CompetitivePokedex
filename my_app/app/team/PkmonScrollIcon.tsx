"use client"

import "./PkmonScrollIcon.css";
import PkmonApiUtil from "../../utility/PkmonApiUtil"
import {useEffect} from "react"
export default function PkmonScrollIcon(id:number){
        let pkmonSprite: string|null = null;
        let typeSprite: string|null = null;
        
        useEffect(()=>{
            PkmonApiUtil.getPokemon(id).then()
        }, [])
        return(
            <div className = {`PkmonScrollIcon`}>
                <img className = "pkmonSprite"></img>
                <div>
                    <p className = "pkmonName"></p>
                </div>
                <img className = "pkmonType"></img>

            </div>
        )
}