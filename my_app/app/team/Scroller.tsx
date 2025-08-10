"use client"
import "./Scroller.css"
import {ReactNode, useState, useEffect, useRef, useCallback} from "react"
import PkmonScrollIcon from "./PkmonScrollIcon"
import PkmonApiUtil from "../../utility/PkmonApiUtil"

export default function Scroller(){
    let pkmonInfo:any = useRef([])
    let [loading, setIsLoading] = useState(false);
    let scroller = useRef(null);
    let loadingDiv = useRef(null);
    const callBack = useCallback(async (entries:any[])=>
        
        {
            if(entries[0].isIntersecting == true){
                
                const newPkmon:any[] = [...pkmonInfo.current]
                //{id?:string, pkmonName?:string, pkmonSprite?:string, typeSprites?:string[]}
                for(let i = pkmonInfo.current.length + 1; i < pkmonInfo.current.length + 10 && i < 1000; i++){
                        const pkmon:any = await PkmonApiUtil.getPokemon(i); //specify the type later
                        const id = `${i}`;
                        const name = PkmonApiUtil.getPokemonName(pkmon);
                        const pkmonSprite = PkmonApiUtil.getPokemonSprite(pkmon);
                        const typeSprites = PkmonApiUtil.getPokemonTypes(pkmon).map((type:string) => PkmonApiUtil.getPokemonTypeSprite(type as keyof object));
                        newPkmon.push({id:id, pkmonName: name, pkmonSprite: pkmonSprite, typeSprites: typeSprites });
                }
                pkmonInfo.current = newPkmon;
                setIsLoading(true);
            }else{
                setIsLoading(false);
            }
           
        
    },[setIsLoading])
    useEffect(
        ()=>{
            const options:IntersectionObserverInit = {
                root: scroller.current,
                rootMargin:"0px",
                threshold:0.1,
            }
            const observer = new IntersectionObserver(callBack, options);
            observer.observe(loadingDiv.current!);
            
           return(()=>{
            if(loadingDiv.current){
                observer.unobserve(loadingDiv.current);
            }
           })
        }, [loading]
      
    )   
    return(
        <div className = "scroller" ref={scroller} >
            
            {pkmonInfo.current?.map((info:{id:string, pkmonName: string, pkmonSprite: string, typeSprites: string[]}) => <PkmonScrollIcon key = {info.id} info = {info} ></PkmonScrollIcon>)}
            <div ref={loadingDiv}>loading</div>
        </div>  
    )
}



