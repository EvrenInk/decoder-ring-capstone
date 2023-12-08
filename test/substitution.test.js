const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests written by Student", () => {
    const input = "message? recieved.";
    let encode = true;
    let expected = "jd**~fd? zd^rd/ds.";
    it("should maintain spaces from the input while encoding", () => {
        let alphabet = "~q^sdtfgreoijmnbxz*7a/hk+=";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces from the input while decoding", () => {
        let alphabet = "~q^sdtfgreoijmnbxz*7a/hk+=";
        const actual = substitution(expected, alphabet, encode = false);
        expect(actual).to.equal(input);
    });
    describe("should return false if...", () => {
        it("the substitution alphabet is not provided", () => {
            const actual = substitution(input, encode);
            expect(actual).to.equal(false);
        });
        it("the substitution alphabet is not 26 characters exactly", () => {
            let alphabet = "mweha!";
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(false);
        });
        it("the substitution alphabet's characters are not unique", () => {
            let alphabet = "~q^+dtfgr+oijmn+xz*7a/hk+=";
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(false);
        });
    })
})