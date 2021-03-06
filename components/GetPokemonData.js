import axios from "axios";
import HandleOverflowData from "./HandleOverflowData.js";

export default async function GetData(pokemon) {
  let url = pokemon.url;
  let height = 0;
  let weight = 0;
  let firstFetch = 0;
  let secondFetch = 0;
  await axios(url)
    .then((response) => {
      height += response.data.height;
      weight += response.data.weight;
      firstFetch += 1;
    })
    .catch((error) => {
      if (error.config.url) {
        let overflow = HandleOverflowData(error.config.url);
        height += overflow.height;
        weight += overflow.weight;
        secondFetch += 1;
      } else  {
        console.log(error)
      }
    });
  return { height: height, weight: weight, firstFetch, secondFetch };
};
