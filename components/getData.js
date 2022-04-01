import axios from "axios";
import HandleErrorData from "./HandleErrorData.js";

const GetData = async (pokemon) => {
  let url = pokemon.url;
  let height = 0;
  let weight = 0;
  let first = 0;
  let second = 0;
  await axios(url)
    .then((response) => {
      height += response.data.height;
      weight += response.data.weight;
      first += 1;
    })
    .catch((error) => {
      if (error.config.url) {
        let overflow = HandleErrorData(error.config.url);
        height += overflow.height;
        weight += overflow.weight;
        second += 1;
      }
    });
  return { height: height, weight: weight, first, second };
};

export default GetData;
