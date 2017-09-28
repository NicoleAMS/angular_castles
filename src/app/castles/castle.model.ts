export class Castle {
    public name: string;
    public images: Image[];
    public shortDescr: string;
    public description: string;
    public prices: string[];
    public openingTimes: string;
    public address: string;
    public county: string;

    constructor(
      name: string,
      images: Image[],
      shortDescr: string,
      description: string,
      prices: string[],
      openingTimes: string,
      address: string,
      county: string
    ) {
      this.name = name;
      this.images = images;
      this.shortDescr = shortDescr;
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

  export class CastlePrices {
    public adult: string;
    public child: string;
    public member: string;

    constructor(adult: string, child: string, member: string) {
      this.adult = adult;
      this.child = child;
      this.member = member;
    }
  }
