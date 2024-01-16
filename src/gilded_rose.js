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
};

function updateAged(item) {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }
  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }
}

function updatePass(item) {
  if (
    item.name != "Aged Brie" &&
    item.name != "Backstage passes to a TAFKAL80ETC concert"
  ) {
    if (item.quality > 0) {
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.quality = item.quality - 1;
      }
    }
  } else {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        if (item.sellIn < 11) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }
  }
  if (item.name != "Sulfuras, Hand of Ragnaros") {
    item.sellIn = item.sellIn - 1;
  }
  if (item.sellIn < 0) {
    if (item.name != "Aged Brie") {
      if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        item.quality = item.quality - item.quality;
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }
}

function updateThor(item) {
  if (
    item.name != "Aged Brie" &&
    item.name != "Backstage passes to a TAFKAL80ETC concert"
  ) {
    if (item.quality > 0) {
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.quality = item.quality - 1;
      }
    }
  } else {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        if (item.sellIn < 11) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }
  }
  if (item.name != "Sulfuras, Hand of Ragnaros") {
    item.sellIn = item.sellIn - 1;
  }
  if (item.sellIn < 0) {
    if (item.name != "Aged Brie") {
      if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        item.quality = item.quality - item.quality;
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }
}

function updateNormal(item) {
  if (
    item.name != "Aged Brie" &&
    item.name != "Backstage passes to a TAFKAL80ETC concert"
  ) {
    if (item.quality > 0) {
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.quality = item.quality - 1;
      }
    }
  } else {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        if (item.sellIn < 11) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }
  }
  if (item.name != "Sulfuras, Hand of Ragnaros") {
    item.sellIn = item.sellIn - 1;
  }
  if (item.sellIn < 0) {
    if (item.name != "Aged Brie") {
      if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        item.quality = item.quality - item.quality;
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
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
