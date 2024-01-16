var { expect } = require("chai");
var { Shop, Item } = require("../src/gilded_rose.js");

const tests = require("../test.json");

describe("Gilded Rose", function () {
  for (const test of tests) {
    const [name, sellIn, quality, outputSellIn, outputQuality] = test;

    const description = {
      name,
      sellIn,
      quality,
      outputSellIn,
      outputQuality,
    };

    it(JSON.stringify(description), () => {
      const gildedRose = new Shop([new Item(name, sellIn, quality)]);
      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).to.equal(outputSellIn);
      expect(items[0].quality).to.equal(outputQuality);
    });
  }
});
