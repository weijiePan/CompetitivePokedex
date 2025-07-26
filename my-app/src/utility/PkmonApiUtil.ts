
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
    static getPokemonName(pkmon:object){

    }
    static getPokemonStats(pkmon:object){
    /*
    "stats": [
    {
      "base_stat": 70,
      "effort": 2,
      "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
      }
    },
    */
    }
    static getPokemonDesc(pkmon:object){
        /*
        flavor_text_entries": [
    {
      "flavor_text": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    },
    {
      "flavor_text": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
      }
    },
        */
    }
    static getPokemonSprite(pkmon:object){

    }
}

export default PkmonApiUtil;