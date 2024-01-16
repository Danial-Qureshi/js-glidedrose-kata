class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const ItemTypes = {
  AGED: "Aged Brie",
  PASS: "Backstage passes to a TAFKAL80ETC concert",
  THOR: "Sulfuras, Hand of Ragnaros",
  NUN: "Conjured, The Nun",
};

function updateAged(item) {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }
  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0 && item.quality < 50) {
    item.quality = item.quality + 1;
  }
}

function updatePass(item) {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
    if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
      if (item.sellIn < 11 && item.quality < 50) {
        item.quality = item.quality + 1;
      }

      if (item.sellIn < 6 && item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0) {
    item.quality = 0;
  }
}

function updateThor(item) {}

function updateNun(item) {
  if (item.quality > 0) {
    item.quality = item.quality - 2;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality > 0) {
    item.quality = item.quality - 1;
  }
}

function updateNormal(item) {
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality > 0) {
    item.quality = item.quality - 1;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case ItemTypes.AGED:
          updateAged(item);
          continue;
        case ItemTypes.PASS:
          updatePass(item);
          continue;
        case ItemTypes.THOR:
          updateThor(item);
          continue;
        case ItemTypes.NUN:
          updateNun(item);
          continue;
        default:
          updateNormal(item);
          continue;
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
};
