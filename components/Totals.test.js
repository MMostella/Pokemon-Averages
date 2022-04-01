import Totals from "./Totals.js";

const resolved = [
  { height: 7, weight: 69, firstFetch: 1, secondFetch: 0 },
  { height: 10, weight: 130, firstFetch: 1, secondFetch: 0 },
  { height: 20, weight: 1000, firstFetch: 0, secondFetch: 1 },
  { height: 6, weight: 85, firstFetch: 1, secondFetch: 0 },
  { height: 11, weight: 190, firstFetch: 0, secondFetch: 1 }
];

const result = { heightTotal: 54, weightTotal: 1474, firstFetch: 3, secondFetch: 2 }

describe("Totals the heights, weights and fetches for the pokemon array", () => {
    it("pokemon obj array with height, weight and which fetch goes in, returns the totals for each", () => {
        expect(Totals(resolved)).toEqual(result);
    })
})
