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
    logo: string;
    requirements: string[];
    location: string;
    linkToWebsite: string;
    externalID: number;
    prereqireties: string[];
    functionality: string;
    departement: string;
    role: string;
    category: string;
    tags: string[];

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
        logo: string,
        requirements: string[],
        location: string,
        linkToWebsite: string,
        externalID: number,
        prereqireties: string[],
        functionality: string,
        departement: string,
        role: string,
        category: string,
        tags: string[],){
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
            this.logo = logo;
            this.requirements = requirements;
            this.location = location;
            this.linkToWebsite = linkToWebsite;
            this.externalID = externalID;
            this.prereqireties = prereqireties;
            this.functionality = functionality;
            this.departement = departement;
            this.role = category;
            this.category = category;
            this.tags = tags;

            timeperiod == null ? this.timeperiod = 'permanent' : this.timeperiod = timeperiod;
        }
}