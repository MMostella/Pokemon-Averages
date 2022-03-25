#!/usr/bin/env node

import fetch from "node-fetch";

let api_url = 'https://pokeapi.co/api/v2/pokemon';

async function fetchPokemon(limit, offset) {

    fetch(`${api_url}?limit=${limit}&offset=${offset}`)
        .then((response) => response.json())
        .then(allPokemon => {
            allPokemon.results.forEach(pokemon => {
                getPokemonData(pokemon, limit)
            })
        })
}

function getPokemonData(pokemon, limit) {
    // console.log(pokemon)
    let height = [];
    let weight = [];
    // let averageHeight = height / limit;
    // let averageWeight = weight / limit;
    let url = pokemon.url
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData) {
        // console.log(pokeData)
        // pokeData.forEach(
        //     height.push(pokeData.height)
        // )
        height.concat(pokeData.height);
        console.log(pokeData.height)
        // weight.push(pokeData.weight);
        // console.log('---')
        // console.log('Limit: ', limit)
        // console.log('Height: ', pokeData.height)
        // console.log('Weight: ', pokeData.weight)
        // console.log('Height Average: ', averageHeight)
        // console.log('Weight Average: ', averageWeight)
    })
}

await fetchPokemon(2, 30)




// const arr = [1, 2, 3, 4, 5];
// var sum = 0;
// for (var number of arr) {
//     sum += number;
// }
// average = sum / arr.length;
// console.log(average);