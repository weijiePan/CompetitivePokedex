"use client"
import Image from "next/image";
import {useState, useRef, useEffect} from "react";
import Scroller from "./Scroller";
import PkmonApiUtil from "../../utility/PkmonApiUtil";
import "./PkballDisplay.css";
export default function PkballDisplay({id}:{id:string}){
    let [isScroller, setIsScroller] = useState(false);
    let [sprite, setSprite]:[null|string, Function] = useState(null);
    let parent = useRef(null);
    useEffect(()=>{
        
        PkmonApiUtil.getPokemon(parseInt(id)).then((pkmon:any) => {
            setSprite(PkmonApiUtil.getPokemonSprite(pkmon))
        })
        console.log(parent.current);
    },[])
    function hover(){
        setIsScroller(true);
        console.log('ahh0')
    }
    function unhover(){
        setIsScroller(false)
    }
    return(
        <>
            {isScroller? <Scroller></Scroller>:<></>}
            <div className = "pkball-display" onMouseOver={hover} onMouseOut={unhover} ref={parent}>

                <Image className = "team-pokeball-background" src="/assets/ui/team/pokeball-pokemon.svg" alt = "pokeball" width = "200" height = "200"></Image>
                {sprite? <img className = "team-sprite" src = {sprite} alt = "pokemon" width = "100" height = "100"></img>: <></>}
                
            </div>
            
        </>
        
            
    )
}
