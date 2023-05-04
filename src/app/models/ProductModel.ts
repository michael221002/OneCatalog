export class Product {
    index: number;
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
    name: string;
    descripton: string;

    constructor(index: number,
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
        tags: string[],
        name: string,
        description: string){
            this.index = index;
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
            this.role = role;
            this.category = category;
            this.tags = tags;
            this.name = name;
            this.descripton = description

            timeperiod == null ? this.timeperiod = 'permanent' : this.timeperiod = timeperiod;
        }
}