import Image from "next/image";
import styles from "./page.module.css";
import Pokedex from "./components/pokemonDisplay/Pokedex"
import OneColumnPage from "./components/pageLayout/OneColumnPage";
import ProductBanner from "./sections/ProductBanner";
import SplitSection from "./components/sectionLayout/SplitSection";
import NavBtn from "./components/buttons/NavBtn";
import "./home.css";
const pokedexAbout = {
  img:"/assets/pages/pokedex.gif",
  imgRes:{height:1920 ,width:1032},
  imgAlt:"pokedex gif",
  heading:"Stat-packed pokedex",
  descriptor: "Learn about pokemons through a display of useful information(base-stats, type, moves, descriptions...)",
  isImgLeft:true
}

const teamAbout = {
  img:"/assets/pages/team.png",
  imgRes:{height:1728, width:1117},
  imgAlt:"team prototype img",
  heading:"Data-rich team builder",
  descriptor:"Get access to insights about your pokemon team. Find out vulnerabilities, learn the vital roles your pokemons contribute, and get pointers on how to improve your team",
  isImgLeft:false,
}


export default function Home(props:any) {
  const nodes = [
    {node:<ProductBanner title="competitive pokedex"></ProductBanner>, height: "40%" },
    {node:<SplitSection {...pokedexAbout}></SplitSection>, height:"40%"},
    {node:<SplitSection {...teamAbout}></SplitSection>, height:"40%"},
    {node:<NavBtn className="pokedexJoin"  text = "start now" action = {""}></NavBtn>, height:"10%"},
  ]
  return (
    <>
      <OneColumnPage sections = {nodes} ></OneColumnPage>
        

    </>
    
   
    
  );
}
