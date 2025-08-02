
class PkmonApiUtil{
    static typeSpriteFolder = "/assets/ui/typeSprite";
    static typeSprites = {
      "bug":`${PkmonApiUtil.typeSpriteFolder}/bug.svg`,
      'dark':`${PkmonApiUtil.typeSpriteFolder}/dark.svg`,
      'dragon':`${PkmonApiUtil.typeSpriteFolder}/dragon.svg`,
      'electric':`${PkmonApiUtil.typeSpriteFolder}/electric.svg`,
      'fairy':`${PkmonApiUtil.typeSpriteFolder}/fairy.svg`,
      'fighting':`${PkmonApiUtil.typeSpriteFolder}/fighting.svg`,
      'fire':`${PkmonApiUtil.typeSpriteFolder}/fire.svg`,
      'flying':`${PkmonApiUtil.typeSpriteFolder}/flying.svg`,
      'ghost':`${PkmonApiUtil.typeSpriteFolder}/ghost.svg`,
      'grass':`${PkmonApiUtil.typeSpriteFolder}/grass.svg`,
      'ground':`${PkmonApiUtil.typeSpriteFolder}/ground.svg`,
      'ice':`${PkmonApiUtil.typeSpriteFolder}/ice.svg`,
      'normal':`${PkmonApiUtil.typeSpriteFolder}/normal.svg`,
      'poison':`${PkmonApiUtil.typeSpriteFolder}/poison.svg`,
      'psychic':`${PkmonApiUtil.typeSpriteFolder}/psychic.svg`,
      'rock':`${PkmonApiUtil.typeSpriteFolder}/rock.svg`,
      'steel':`${PkmonApiUtil.typeSpriteFolder}/steel.svg`,
      'water':`${PkmonApiUtil.typeSpriteFolder}/water.svg`,

    }
    static async getPokemonInfo(baseUrl:string, id:number){
        const url = `${baseUrl}/${id}/`;
        let response = fetch(url); 
        await response.then((resp) => resp.json()).then(
            (obj) => response = obj
        )
        return response;
    }

    
    static async getPokemon(id:number){
        const baseUrl = "https://pokeapi.co/api/v2/pokemon";
        let pkmon = await PkmonApiUtil.getPokemonInfo(baseUrl, id);
        return pkmon;
    }


    static async getPokemonSpecies(id:number){
        const baseUrl = "https://pokeapi.co/api/v2/pokemon-species";
        let pkmonSpecies = await PkmonApiUtil.getPokemonInfo(baseUrl, id);
        return pkmonSpecies;
    }
    

    static getPokemonName(pkmon:{name:string}){
        return pkmon.name;
    }
    
    static getPokemonTypes(pkmon:{types:{type:{name:string}}[]}){
      const types = pkmon.types;
      let cleanedTypeArr = [];
      for(let i = 0; i < pkmon.types.length; i++){
        cleanedTypeArr.push(types[i].type.name);
      }
      return cleanedTypeArr;
    }

    static getPokemonTypeSprite(type:keyof object){
      return PkmonApiUtil.typeSprites[type] ? PkmonApiUtil.typeSprites[type] : undefined;
    }
    static getPokemonId(pkmon:{id:number}){
      return(pkmon.id);
    }


    static getPokemonStats(pkmon:{stats:{stat:{name:string}, base_stat: number}[]}){
      let baseStats = []
      for(let i = 0; i < pkmon.stats.length;i++){
          baseStats.push({"base_stat":pkmon.stats[i].stat.name, "val":pkmon.stats[i].base_stat});
      }
      return(baseStats);
    }

    static cleanEscapeCharacter(str:string){
       let ind =  str.indexOf("\f");
       str = str.substring(0,ind) + " " + str.substring(ind + 1);
      return(str);
    }
    static getPokemonDesc(pkmonSpecies:{flavor_text_entries:{flavor_text:string, language:{name:string}}[]}){
      const flavorEntries = pkmonSpecies.flavor_text_entries;
      for(let i = 0; i < flavorEntries.length; i++){
        if(flavorEntries[i].language.name =="en"){
          return(PkmonApiUtil.cleanEscapeCharacter(flavorEntries[i].flavor_text));
        }
      }
      return(flavorEntries[0].flavor_text); 
    }
    static getPokemonSprite(pkmon:{sprites:{other:{"official-artwork":{"front_default":string}}}}){
      // Official artwork - highest quality for enlarging
      
      
      // Fallback to regular sprite
      return pkmon.sprites.other["official-artwork"].front_default;
    }
}

export default PkmonApiUtil;