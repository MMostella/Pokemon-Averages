#!/usr/bin/env node

import FetchPokemon from "./components/FetchPokemon.js";
import GetPokemonData from "./components/GetPokemonData.js";
import PokemonAverages from "./components/PokemonAverages.js";
import Totals from "./components/Totals.js";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

let limit;
let offset;

const askLimit = async () => {
  const answer = await inquirer.prompt({
    name: "limit",
    type: "input",
    message: "Choose your limit...",
    default() {
      return;
    },
  });
  limit = answer.limit;
};

const askOffset = async () => {
  const answer = await inquirer.prompt({
    name: "offset",
    type: "input",
    message: "Choose your offset...",
    default() {
      return;
    },
  });
  offset = answer.offset;
};

const startApp = async () => {
  await askLimit();
  await askOffset();
  const spinner = createSpinner("Let me look around...").start();
  const start = Date.now();
  let pokemonArray = await FetchPokemon(limit, offset);
  let promisedArray = pokemonArray.map(async (poke) => {
    let statsObject = await GetPokemonData(poke);
    return statsObject;
  });
  const resolvedArray = await Promise.all(promisedArray);
  const totalsObject = Totals(resolvedArray);
  spinner.success();
  const stop = Date.now();
  console.clear();
  console.log(`Completed in ${(stop - start) / 1000} seconds`);
  return PokemonAverages(totalsObject.heightTotal, totalsObject.weightTotal, totalsObject.firstFetch, totalsObject.secondFetch);
};

startApp();
