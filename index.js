#!/usr/bin/env node

import fetch from "node-fetch";
import lodash from "lodash";

let api_url = 'https://pokeapi.co/api/v2/pokemon';
let height = [];
let weight = [];

async function fetchPokemon(limit, offset) {

    fetch(`${api_url}?limit=${limit}&offset=${offset}`)
        .then((response) => response.json())
        .then(allPokemon => {
            // allPokemon.results.reduce(pokemon => {
            //         getPokemonData(pokemon, limit)
            //     })
            // console.log(allPokemon);
            // for (let i = 0; i < allPokemon.results.length; i++) {
            //     getPokemonData(limit)
            // }
            allPokemon.results.forEach(pokemon => {
                getPokemonData(pokemon, limit)
            })
        })
}

function getPokemonData(pokemon, limit) {
    // console.log(pokemon)
    let url = pokemon.url
    fetch(url)
    .then(response => response.json())
    .then(pokeData => {
        height.push(pokeData.height);
        weight.push(pokeData.weight);
        pokeAverages(pokeData.height, pokeData.weight, limit);
    })
}

function pokeAverages(limit) {
    let heightSum = lodash.sum(height);
    let weightSum = lodash.sum(weight);
    let heightAverage = heightSum / limit;
    let weightAverage = weightSum / limit;
    console.log('---')
    console.log("Height Average: ", heightAverage);
    console.log("Weight Average: ", weightAverage);
}

await fetchPokemon(2, 0)