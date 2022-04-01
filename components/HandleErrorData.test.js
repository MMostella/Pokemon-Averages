import HandleErrorData from "./HandleErrorData.js";
import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon/2/"

const result = { heightArray: [10], weightArray: [130] }

describe("Getting stats from the indiviual pokemon", () => {
  beforeEach(() => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: { results: result } });
  })
    it("individual pokemon url goes in, obj with height, weight array is returned", async () => {
      expect(await HandleErrorData(url)).toEqual(result);
    });
  });