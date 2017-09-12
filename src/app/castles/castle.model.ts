export class Castle {
    public name: string;
    public images: Image[];
    public description: string;
    public prices: string[];
    public openingTimes: string;
    public address: string;
    public county: string;

    constructor(
      name: string,
      images: Image[],
      description: string,
      prices: string[],
      openingTimes: string,
      address: string,
      county: string
    ) {
      this.name = name;
      this.images = images;
      this.description = description;
      this.prices = prices;
      this.openingTimes = openingTimes;
      this.address = address;
      this.county = county;
    }
  }

  export class Image {
    public url: string;

    constructor(url: string) {
      this.url = url;
    }
  }
