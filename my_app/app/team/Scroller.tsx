"use client"
import "./Scroller.css"
import {ReactNode, useState, useEffect, useRef, Suspense} from "react"
import PkmonScrollIcon from "./PkmonScrollIcon"
import PkmonApiUtil from "../../utility/PkmonApiUtil"

export default function Scroller(){
    let [endId, setEndId] = useState(10);
    let [pkmonInfo, setPkmonInfo]: [pkmonInfo:any, setPkmonInfo:any] = useState([]);
    const ref = useRef(null);
    const parent = useRef(null);
    
    useEffect(
       
        ()=>{
            
            (async ()=>{
                let arrAddition = []
                for(let i = pkmonInfo.length + 1; i < endId && i < 1000; i++){
                    const pkmon:any = await PkmonApiUtil.getPokemon(i);
                    arrAddition.push({"id":i, "name":PkmonApiUtil.getPokemonName(pkmon), "pkmonSprite":PkmonApiUtil.getPokemonSprite(pkmon, true), "typeSprites":PkmonApiUtil.getPokemonTypes(pkmon).map((type)=> PkmonApiUtil.getPokemonTypeSprite(type as keyof object)) });
                }
                setPkmonInfo((prev:any[]) => [...prev, ...arrAddition]);
                //;research how to update in a loop
                //
            })();
            
            let option:any = {
                root:parent.current,
                rootMargin:"0px",
                threshold:0.1
            }
            function callBack(){
                if(ref.current){
                    observer.unobserve(ref.current);
                }
                setEndId(prev => prev + 10);
                 
            }
            const observer = new IntersectionObserver(callBack, option);
            if(ref.current){
                observer.observe(ref.current);
            }
            return()=>{
                if(ref.current){
                    observer.unobserve(ref.current);
                }
            }
            
            
        }, [endId]
      
    )   
    const a = ()=> pkmonInfo?.map((info:any) => {return (<PkmonScrollIcon id = {info.id} pkmonName = {info.name} pkmonSprite = {info.pkmonSprite} typeSprites={info.typeSprites} key = {crypto.randomUUID()}></PkmonScrollIcon>) });
    const b = ()=>{
        let a:any[] = []
        for(let i = 0; i < 10; i++){
            a.push(<PkmonScrollIcon></PkmonScrollIcon>)
        }
        return(a);
    }
    return(
        <div className = "scroller" ref={parent} >
            {pkmonInfo ? a() : b()}
            <div ref={ref}>loading</div>
        </div>  
    )
}



