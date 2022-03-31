import Totals from "./Totals.js";

const resolved = [ [ [ 7 ], [ 69 ] ] ];

const result = { heightTotal: 0, weightTotal: 0, actualCount: 1 };

describe("Totals the heights and weights for the pokemon", () => {
    it("height and weight arrays come in, totals come out", () => {
        expect(Totals(resolved).toEqual(result));
    })
})