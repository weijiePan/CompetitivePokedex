import Image from "next/image";
import styles from "./page.module.css";
import Pokedex from "./Pokedex"
import { Roboto_Condensed} from "next/font/google";
const Robot_Condensed = Roboto_Condensed({
        subsets:[
            "latin"
        ]
    });
export default function Home() {
  return (
    <Pokedex></Pokedex>
  );
}
