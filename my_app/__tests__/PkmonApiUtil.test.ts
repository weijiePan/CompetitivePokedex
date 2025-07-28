import PkmonApiUtil from "@/utility/PkmonApiUtil";
import { Playwrite_SK } from "next/font/google";
for(let i = 1; i < 4; i++){
    it("pokemon object fetch",
        async ()=>{
            let pkmonObj = await PkmonApiUtil.getPokemon(i);
            expect(pkmonObj).toHaveProperty("id")
            expect(pkmonObj).toHaveProperty("name");
        }
    )
}

for(let i = 1; i < 4; i++){
    it("pokemon species fetch",
        async ()=>{
            let pkmonObj = await PkmonApiUtil.getPokemonSpecies(i);
            expect(pkmonObj).toHaveProperty("flavor_text_entries")
            expect(pkmonObj).toHaveProperty("capture_rate");
        }
    )
}
const pokemonNames = [
  "Bulbasaur", "Ivysaur", "Venusaur",
  "Charmander", "Charmeleon", "Charizard",
  "Squirtle", "Wartortle", "Blastoise",
  "Pikachu", "Raichu"
];

const pokemonIDs = [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9,
  25, 26
];
it(
   "get pokemon name", async() =>{
        for(let i = 0; i < pokemonNames.length; i++){
            let name = await PkmonApiUtil.getPokemonName(pokemonIDs[i]);
            expect(name).toBe(pokemonNames[i].toLowerCase());
        }


    } 

    
)

it(
    "get base stat", ()=>{
        PkmonApiUtil.getPokemon(1).then(
            (pkmon)=>{
                let baseStats = PkmonApiUtil.getPokemonStats(pkmon);
                expect(baseStats[0]).toHaveProperty("base_stat", "hp");
                expect(baseStats[0]).toHaveProperty("val", 45);
            }
        )
    }
)
it(
    "get base stat", ()=>{
        PkmonApiUtil.getPokemon(1).then(
            (pkmon)=>{
                let baseStats = PkmonApiUtil.getPokemonStats(pkmon);
                expect(baseStats[1]).toHaveProperty("base_stat", "attack");
                expect(baseStats[1]).toHaveProperty("val", 49);
            }
        )
    }
)
it(
    "get base stat", ()=>{
        PkmonApiUtil.getPokemon(1).then(
            (pkmon)=>{
                let baseStats = PkmonApiUtil.getPokemonStats(pkmon);
                expect(baseStats[2]).toHaveProperty("base_stat", "defense");
                expect(baseStats[2]).toHaveProperty("val", 49);
            }
        )
    }
)
it(
    "get description", ()=>{
        PkmonApiUtil.getPokemonSpecies(1).then(
            (pkmonSpecies) =>{
                expect(PkmonApiUtil.getPokemonDesc(pkmonSpecies)).toBe("A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.")
            }
        )
    }
)
it(
    "get description", ()=>{
        PkmonApiUtil.getPokemonSpecies(10).then(
            (pkmonSpecies) =>{
                expect(PkmonApiUtil.getPokemonDesc(pkmonSpecies)).toBe("Its short feet are tipped with suction\npads that enable it to tirelessly climb\nslopes and walls.")
            }
        )
    }
)
it(
    "get sprite", ()=>{
        PkmonApiUtil.getPokemon(1).then(
            (pkmon)=>{
                expect(PkmonApiUtil.getPokemonSprite(pkmon)).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
            }
        )
    }
)
it(
    "get sprite", ()=>{
        PkmonApiUtil.getPokemon(2).then(
            (pkmon)=>{
                expect(PkmonApiUtil.getPokemonSprite(pkmon)).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png")
            }
        )
    }
)