import GetData from "./GetData.js";

const poke = { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' };

const result = [ [ 7 ], [ 69 ] ];

describe("Getting stats from the indiviual pokemon", async () => {
    it("pokemon obj goes in, height and weight array leaves", () =>{
        expect(await GetData(poke).toEqual(result));
    })
})