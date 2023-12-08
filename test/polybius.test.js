const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests written by Student", () => {
    let input = "message time";
    let encode = true;
    it("should encode a message into a string of numbers, maintaining spaces.", () => {
        const expected = "23513434112251 44422351";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it("should decode message from a string of numbers, maintaining spaces.", () => {
        input = "message ti/jme";
        const expected = "23513434112251 44422351";
        const actual = polybius(expected, encode = false);
        expect(actual).to.equal(input);
    })
});