export interface Castle2 {
    key$: string;
    name: string;
    images: Image[];
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
