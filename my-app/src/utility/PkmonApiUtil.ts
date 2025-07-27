
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
   
    static async getPokemonName(id:number){
        const pkmon:any = await PkmonApiUtil.getPokemon(id);
        for(let i = 0; i < pkmon.forms.length; i++){
          if(pkmon.forms[i].name != undefined){
            return pkmon.forms[i].name;
          }
        }
    }


    static getPokemonStats(pkmon:any){
      let baseStats = []
      for(let i = 0; i < pkmon.stats.length;i++){
          baseStats.push({"base_stat":pkmon.stats[i].stat.name, "val":pkmon.stats[i].base_stat});
      }
      return(baseStats);
    }


    static getPokemonDesc(pkmonSpecies:any){
      const flavorEntries = pkmonSpecies.flavor_text_entries;
      for(let i = 0; i < flavorEntries.length; i++){
        if(flavorEntries[i].language.name =="en"){
          return(flavorEntries[i].flavor_text);
        }
      }
    }
    static getPokemonSprite(pkmon:any){
      return pkmon.sprites.front_default;
    }
}

export default PkmonApiUtil;