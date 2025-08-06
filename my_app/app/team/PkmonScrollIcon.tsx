"use client"

import "./PkmonScrollIcon.css";
import PkmonApiUtil from "../../utility/PkmonApiUtil"
import {useEffect, useState} from "react"
export default function PkmonScrollIcon(id:number){
        let [pkmonSprite, changePkmonSprite]: [pkmonSprite : string|null, changePkmonSprite: Function] = useState(null);
        let [pkmonName, changePkmonName]: [pkmonName : string|null, changePkmonName: Function] = useState(null);
        let [typeSprite, changeType]: [typeSprite : string|null, changeType: Function] = useState(null);

        useEffect(()=>{
            PkmonApiUtil.getPokemon(id).then(
                (Pkmon:any) => {
                    changePkmonSprite(PkmonApiUtil.getPokemonSprite(Pkmon));
                    changeType(PkmonApiUtil.getPokemonTypes(Pkmon));
                    changePkmonName(PkmonApiUtil.getPokemonName(Pkmon));
                }
            )
        }, [])
        return(
            <div className = {`PkmonScrollIcon`}>
                {pkmonSprite ? <img className = "pkmonSprite" src={pkmonSprite}></img>: <img className = "pkmonSprite"></img>}
                <div>
                    {pkmonName? <p className = "pkmonName" >{pkmonName}</p>: <p className ="pkmonName"></p>>}
                </div>
                {typeSprite ? <img className = "typeSprite" src={typeSprite}></img>: <img className = "typeSprite"></img>}
            </div>
        )
}