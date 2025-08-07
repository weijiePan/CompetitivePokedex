"use client"
import "./PkmonScrollIcon.css";
import PkmonApiUtil from "../../utility/PkmonApiUtil"
import {useEffect, useState} from "react"
export default function PkmonScrollIcon({id}:{id:number}){
        let [pkmonSprite, changePkmonSprite]: [pkmonSprite : string|null, changePkmonSprite: Function] = useState(null);
        let [pkmonName, changePkmonName]: [pkmonName : string|null, changePkmonName: Function] = useState(null);
        let [typeSprites, changeTypes]: [typeSprite : string|null, changeType: Function] = useState(null);
        useEffect(()=>{
            PkmonApiUtil.getPokemon(id).then(
                (Pkmon:any) => {
                    changePkmonSprite(PkmonApiUtil.getPokemonSprite(Pkmon, true));
                    changePkmonName(PkmonApiUtil.getPokemonName(Pkmon));
                    const types = PkmonApiUtil.getPokemonTypes(Pkmon).map(type => {
                        return <img src = {PkmonApiUtil.getPokemonTypeSprite(type as keyof object) } className = "pkmonType" key = {crypto.randomUUID()}></img>
                    })
                    changeTypes(types);
                }
            )
        }, [])
        return(
            <div className = {`pkmonScrollIcon`}>
                {pkmonSprite ? <img className = "pkmonSprite" src={pkmonSprite}></img>: <img className = "pkmonSprite"></img>}
                <div>
                    {pkmonName? <p className = "pkmonName" >{pkmonName}</p>: <p className ="pkmonName"></p>}
                </div>
                <div className = "typeSprites">
                    {typeSprites}
                </div>
            </div>
        )
}