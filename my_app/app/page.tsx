import Image from "next/image";
import styles from "./page.module.css";
import Pokedex from "./components/pokemonDisplay/Pokedex"
import OneColumnPage from "./components/pageLayout/OneColumnPage";
import ProductBanner from "./sections/ProductBanner";
import SplitSection from "./components/sectionLayout/SplitSection";


const pokedexAbout = {
  img:"/assets/pages/pokedex.gif",
  imgRes:{height:1920 ,width:1032},
  imgAlt:"pokedex gif",
  heading:"Stat-packed pokedex",
  descriptor: "Learn about pokemons through a display of useful information(base-stats, type, moves, descriptions...)",
  isImgLeft:true
}


export default function Home(props:any) {
  const nodes = [
    {node:<ProductBanner title="competitive pokedex"></ProductBanner>, height: "40%" },
    {node:<SplitSection {...pokedexAbout}></SplitSection>, height:"40%"},
  ]
  return (
    <OneColumnPage sections = {nodes} ></OneColumnPage>
    
  );
}
