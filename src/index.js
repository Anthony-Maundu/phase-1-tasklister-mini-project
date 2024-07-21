document.addEventListener("DOMContentLoaded", () => {
const { expect } = require("chai");
const helpers = require("./helpers");

describe("Helpers Module", () => {
  describe("sampleFunction", () => {
    it("should return true", () => {
      const result = helpers.sampleFunction();
      expect(result).to.be.true;
    });
  });
});

});
