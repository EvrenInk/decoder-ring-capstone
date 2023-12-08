const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests written by Student", () => {
    const input = "message?";
    const shift = 1;
    let encode = true;
    it("should return a string", () => {
        expect(caesar(input,shift)).to.be.a("string");
    });
    it("should encode message by the shifted value", () => {
        const expected = "nfttbhf?";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should decode message by the shifted value", () => {
        const decodeInput = "nfttbhf?";
        const actual = caesar(decodeInput, shift, encode = false);
        expect(actual).to.equal(input);
    })
});