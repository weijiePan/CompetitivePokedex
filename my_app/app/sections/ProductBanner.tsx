import { ReactNode } from "react";
import NavLinks from "../components/navigation/navLinks";
import Image from "next/image";
import {Inter} from "next/font/google"
import "./ProductBanner.css"

const inter = Inter({subsets:["latin"]});
export default function ProductBanner({title, button}:{title:string, button?:ReactNode}){
    return(
        <div className="ProductBanner">
            <NavLinks></NavLinks>
            <Image className = "background" priority = {true} src="/assets/ui/background/waterPokemonPlay.jpg" width="1920" height="1080"  alt="Product banner background"></Image>
            <Image className = "pokeball"  src="/assets/ui/team/pokeball-pokemon.svg" width="900" height="900" alt="pokeball"></Image>
            <h1 className = {`${inter.className}`}>{title}</h1>
        </div>
    )
}
