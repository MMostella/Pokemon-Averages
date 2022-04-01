import axios from "axios";

export default async function FetchPokemon(limit, offset) {
    let api_url = 'https://pokeapi.co/api/v2/pokemon';
    let pokemonArray = [];
    await axios(`${api_url}?limit=${limit}&offset=${offset}`)
    .then(response => {
        response.data.results.forEach(pokemon => {
            pokemonArray.push(pokemon)
        })
    })
    .catch(error => {
        console.error(error)
    })

    return pokemonArray;
}