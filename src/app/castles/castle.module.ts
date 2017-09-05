export class Castle {
    public name: string;
    public images: string[];
    public description: string;
    public prices: string[];
    public openingTimes: string;
    public address: string;

    constructor(
      name: string,
      images: string[],
      description: string,
      prices: string[],
      openingTimes: string,
      address: string
    ) {
      this.name = name;
      this.images = images;
      this.description = description;
      this.prices = prices;
      this.openingTimes = openingTimes;
      this.address = address;
    }
  }
