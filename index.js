#!/usr/bin/env node

import fetch from "node-fetch";
import lodash from "lodash";
import inquirer from "inquirer";

let api_url = 'https://pokeapi.co/api/v2/pokemon';
var height = [];
var weight = [];
let limit;
let offset;

const sleep = (ms = 500) => new Promise((r) => setTimeout(r, ms));
let start = Date.now()

async function askLimit() {
    const answer = await inquirer.prompt({
        name: 'limit',
        type: 'input',
        message: 'Choose your limit...',
        default() {
            return;
        }
    })
    limit = answer.limit;
}

async function askOffset() {
    const answer = await inquirer.prompt({
        name: 'offset',
        type: 'input',
        message: 'Choose your offset...',
        default() {
            return;
        }
    })
    offset = answer.offset;
}

async function fetchPokemon() {
    fetch(`${api_url}?limit=${limit}&offset=${offset}`)
        .then((response) => response.json())
        .then(allPokemon => {
            allPokemon.results.forEach(pokemon => {
                getPokemonData(pokemon, limit)
            })
        })
}

function getPokemonData(pokemon) {
    let url = pokemon.url
    fetch(url)
    .then(response => response.json())
    .then(pokeData => {
        height.push(pokeData.height);
        weight.push(pokeData.weight);
    })
}

async function pokeAverages() {
    await sleep();
    let heightSum = lodash.sum(height);
    let weightSum = lodash.sum(weight);
    let heightAverage = heightSum / limit;
    let weightAverage = weightSum / limit;
    console.log("Height Average: ", heightAverage);
    console.log("Weight Average: ", weightAverage);
    let end = Date.now()
    console.log(`Execution time: ${(end - start) / 1000} seconds`);
}

await askLimit();
await askOffset();
await fetchPokemon()
await pokeAverages()
