"use client"
import "./PkmonScrollIcon.css";
import PkmonApiUtil from "../../utility/PkmonApiUtil"
import {useEffect, useState} from "react"
export default function PkmonScrollIcon({id, pkmonName, pkmonSprite, typeSprites}:{id?:string, pkmonName?:string, pkmonSprite?:string, typeSprites?:string[]}){
    if(id && typeSprites){
        const types = typeSprites.map((type) => {
            return(
                <img className = "pkmonType" src={type} key = {crypto.randomUUID()}></img>
            )
        })
        return(
            <div className = {`pkmonScrollIcon`} id = {id}>
                <img className = "pkmonSprite" src={pkmonSprite}></img>
                <div>
                    <p className = "pkmonName" >{pkmonName}</p>
                </div>
                <div className = "typeSprites">
                    {types}
                </div>
                
            </div>
        )
    }else{
        return(
            <div className = {`pkmonScrollIcon`} id = {id}>
                <img className = "pkmonSprite" src={pkmonSprite}></img>
                <div>
                    <p className = "pkmonName" >{pkmonName}</p>
                </div>
                <div className = "typeSprites">
                </div>
                
            </div>
        )
    }    
    
}