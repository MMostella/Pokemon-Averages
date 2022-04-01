import GetPokemonData from "./GetPokemonData.js";

const poke = { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' };


const result = { height: 7, weight: 69, firstFetch: 1, secondFetch: 0 };

describe("Getting stats from the indiviual pokemon", () => {
    it("individual pokemon obj goes in, obj with height, weight and which fetch processed it is returned", async () =>{
        expect(await GetPokemonData(poke)).toEqual(result);
    })
})
