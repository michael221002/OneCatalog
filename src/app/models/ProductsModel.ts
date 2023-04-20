import { Tag } from "./TagModel";

export class Product {
    internalID: number;
    businessReason: string;
    productName: string;
    publisher: string;
    version: string;
    edition: string;
    releaseDate: string;
    standard: boolean;
    costs: number;
    price: number;
    timeperiod: string | undefined;
    tags: string[];
    logo: string;
    requirements: string[];
    location: string;
    linkToWebsite: string;
    externalID: number;
    prereqireties: string[];

    constructor(internalID: number,
        businessReason: string,
        productName: string,
        publisher: string,
        version: string,
        edition: string,
        releaseDate: string,
        standard: boolean,
        costs: number,
        price: number,
        timeperiod: string | undefined,
        tags: string[],
        logo: string,
        requirements: string[],
        location: string,
        linkToWebsite: string,
        externalID: number,
        prereqireties: string[],){
            this.internalID = internalID;
            this.businessReason = businessReason;
            this.productName = productName;
            this.publisher = publisher;
            this.version = version;
            this.edition = edition;
            this.releaseDate = releaseDate;
            this.standard = standard;
            this.costs = costs;
            this.price = price;
            this.timeperiod = timeperiod; //here
            this.tags = tags;
            this.logo = logo;
            this.requirements = requirements;
            this.location = location;
            this.linkToWebsite = linkToWebsite;
            this.externalID = externalID;
            this.prereqireties = prereqireties;

            timeperiod == null ? this.timeperiod = 'permanent' : this.timeperiod = timeperiod;
        }
}