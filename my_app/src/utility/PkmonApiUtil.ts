
class PkmonApiUtil{
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

    
    static getPokemonId(pkmon:any){
      return(pkmon.id);
    }


    static getPokemonStats(pkmon:any){
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
    static getPokemonDesc(pkmonSpecies:any){
      const flavorEntries = pkmonSpecies.flavor_text_entries;
      for(let i = 0; i < flavorEntries.length; i++){
        if(flavorEntries[i].language.name =="en"){
          return(PkmonApiUtil.cleanEscapeCharacter(flavorEntries[i].flavor_text));
        }
      }
      return(flavorEntries[0].flavor_text); 
    }
    static getPokemonSprite(pkmon:any){
      // Official artwork - highest quality for enlarging
      
      
      // Fallback to regular sprite
      return pkmon.sprites.other["official-artwork"].front_default;
    }
}

export default PkmonApiUtil;