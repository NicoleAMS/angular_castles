export interface Castle2 {
    key$: string;
    name: string;
    images: Image[];
    shortDescr: string;
    description: string;
    prices: string[];
    openingTimes: string;
    address: string;
    county: string;
}

export interface Image {
    key$: string;
    url: string;
}
