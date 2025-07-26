import PkmonApiUtil from "@/utility/pkmonAPIUtil";
for(let i = 1; i < 20; i++){
    it("pokemon object fetch",
        async ()=>{
            let pkmonObj = await PkmonApiUtil.getPokemon(i);
            expect(pkmonObj).toHaveProperty("id")
            expect(pkmonObj).toHaveProperty("name");
        }
    )
}

for(let i = 1; i < 20; i++){
    it("pokemon species fetch",
        async ()=>{
            let pkmonObj = await PkmonApiUtil.getPokemonSpecies(i);
            expect(pkmonObj).toHaveProperty("flavor_text_entries")
            expect(pkmonObj).toHaveProperty("capture_rate");
        }
    )
}
