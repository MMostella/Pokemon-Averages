import HandleErrorData from "./HandleErrorData.js";
import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon/2/"

const result = { heightArray: [10], weightArray: [130] }

describe("sanity", () => {
  beforeEach(() => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: { results: result } });
  })
    it("1 + 1", async () => {
      expect(await HandleErrorData(url)).toEqual(result);
    });
  });