import Image from "next/image";
import styles from "./page.module.css";
import Pokedex from "./components/pokemonDisplay/Pokedex"
import OneColumnPage from "./components/structure/pageLayout/OneColumnPage";
import ProductBanner from "./sections/ProductBanner";
import SplitSection from "./components/structure/sectionLayout/SplitSection";
import NavBtn from "./components/interactivity/buttons/NavBtn";
import FaqBar from "./components/structure/sectionLayout/Faq/FaqBar";
import "./home.css";
import Faq from "./components/structure/sectionLayout/Faq/Faq";

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

const faq1 = {
  question:"what generation and format is covered",
  answer:"1 - 9 and VGC"
}

const faq2 = {
  question:"How is the data collected?",
  answer:"The data comes from sources including PokeApi, smogon... "
}

const faq3 = {
  question:"Where can I find the source code for this website",
  answer:"https://github.com/weijiePan/CompetitivePokedex"
}

const faqs = [faq1, faq2, faq3];
export default function Home(props:any) {
  const nodes = [
    {node:<ProductBanner title="competitive pokedex"></ProductBanner>, height: "40%" },
    {node:<SplitSection {...pokedexAbout}></SplitSection>, height:"40%"},
    {node:<SplitSection {...teamAbout}></SplitSection>, height:"45%"},
    {node:<NavBtn className="pokedexJoin"  text = "start now" action = {""}></NavBtn>, height:"15%", clsName:"joinDiv"},
    {node:<Faq infos = {faqs}></Faq>, height:"40%", clsName:"faq"},
  ]
  return (
    <>
      <OneColumnPage sections = {nodes} ></OneColumnPage>
      

    </>
    
   
    
  );
}
