'use client'
import "./pokedex.css";
import PkmonApiUtil from "@/utility/PkmonApiUtil";
import { ReactNode, useState } from "react";
import { useEffect } from "react";
import ChangePkmonBtn from "./ChangePkmonBtn";
import { FastAverageColor } from "fast-average-color"
import "./globals.css";
import next from "next";
import fs from "fs"
function Pokedex(){
    //https://www.youtube.com/watch?v=MxbEjINYIPc
    let [pkmon, setPkmon] = useState<any | null>(null);
    let [pkmonSpecies, setPkmonSpecies] = useState<any | null>(null);
    let [id, setId] = useState(63);
    let [pkmonColor, setPkmonColor] = useState<string | null>(null);
    function nextPkmon(){
        if(id < 1025){
            setId(id + 1);
        }

    }
    function prevPkmon(){
        if(id > 1){
            setId(id - 1);
        }
    }
    async function getAverageColor(imgUrl:string){
        const fac = await new FastAverageColor();
        const color = await(fac.getColorAsync(imgUrl));
        return(color.rgb);
    }
    useEffect(
        ()=>{
            PkmonApiUtil.getPokemon(id).then(
                (pkmon) => {
                    setPkmon(pkmon)
                    getAverageColor(PkmonApiUtil.getPokemonSprite(pkmon as any)).then((color)=>{
                        setPkmonColor(color)
                    })

                    
                }
            )
            PkmonApiUtil.getPokemonSpecies(id).then(
                (pkmonSpecies) => {
                    setPkmonSpecies(pkmonSpecies);
                }
            )
            
        },
        [id]
    )
    let baseStat:null|ReactNode = null;
    if(pkmon != null){
        baseStat = PkmonApiUtil.getPokemonStats(pkmon).map(
                (stat)=>
                    //{"base_stat":pkmon.stats[i].stat.name, "val":pkmon.stats[i].base_stat}
                    <div className = "stat" key={stat.base_stat}>
                        <div className="statText">
                            <p>{stat.base_stat}</p>
                            <p>{stat.val}</p>
                        </div>
                        <div className = "baseStat">
                            <div className="baseStatVal" style={{width:`${stat.val/255*100}%`}}></div>
                        </div> 
                    </div>
                
        )
    }
    let types:ReactNode|ReactNode[] = null;
    if(pkmon != null){
        types = PkmonApiUtil.getPokemonTypes(pkmon).map((type)=>{
           return <img src = {PkmonApiUtil.getPokemonTypeSprite(type as keyof object)} className = "pkmonType"></img>
        })
    }else{
        types = <></>
    }
    return(
        <div className = "pokedex  flexbox-horizontal fullWidthAndHeight">
            <div className = "leftGraphicBar" style ={{ backgroundColor: pkmonColor? pkmonColor: "blue"}} >
                <img className="pkmonSprite" src = {pkmon ? PkmonApiUtil.getPokemonSprite(pkmon): undefined}></img>
            </div>
            <div className = "pkmonInfo flexbox-vertical fullWidth">
                <div className = "identifier fullWidth">
                    <img className="typeSprite marginHor20"></img>
                    <h3 className="name"> {pkmon ? PkmonApiUtil.getPokemonName(pkmon) : null}</h3>
                    {types}
               </div>
               <div className = "baseStats fullWidth flexbox-horizontal flex-wrap ">
                    {baseStat}
               </div>
               <div className = "description">
                    <div className="leftPlaceHolder"></div>
                    <div className="descriptionText"></div>
                    <p>{pkmonSpecies ? PkmonApiUtil.getPokemonDesc(pkmonSpecies) : null}</p>
               </div>
               <div className="changeButtons">
                    <ChangePkmonBtn className = "left" change = {prevPkmon} text = "<"></ChangePkmonBtn>
                    <ChangePkmonBtn className = "right" change = {nextPkmon} text = ">"></ChangePkmonBtn>
               </div>
               
            </div>
        </div>
        
    )
}

export default Pokedex;