#!/usr/bin/env node

import FetchPokemon from "./components/FetchPokemon.js";
import GetData from "./components/getData.js";
import PokeAverages from "./components/PokeAverages.js";
import Totals from "./components/Totals.js";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

let limit;
let offset;

const askLimit = async () => {
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

const askOffset = async () => {
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

const startApp = async () => {
    await askLimit();
    await askOffset();
    const spinner = createSpinner("Catching them all...").start();
    const start = Date.now();
    let pokemon = await FetchPokemon(limit, offset);
    let pokemonArray = pokemon.map(async (poke) => {
        let stats = await GetData(poke);
        return stats;
    })
    const resolved = await Promise.all(pokemonArray);
    const test = Totals(resolved);
    spinner.success({
        // text: `${actualCount} pokemon sampled, with ${limit - actualCount} errors, resulting in... ${PokeAverages(heightsTotal, weightsTotal, actualCount)}`
    });

    const stop = Date.now();
    // console.log(`Completed in ${(stop - start) / 1000} seconds`)
    return PokeAverages(heightsTotal, weightsTotal, limit)
}

startApp();
