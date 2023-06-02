export class Product {
    [key: string]: any,
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
    timeperiod: string;
    logo: string;
    requirements: string[];
    location: string;
    linkToWebsite: string;
    externalID: number;
    prereqireties: string[];
    functionality: string;
    departement: string[];
    role: string[];
    category: string;
    tags: string[];
    name: string;
    descripton: string;
    technicalOwner: string;
    businessOwner: string;
    contractOwner: string;
    OLA: string;
    appClassification: string;
    lifecycleState: string;
    SWOApproved: string;
    approvalType: string;
    internalID: number;
    licenseModel: string;
    licenseLevel: string;

    constructor(
        index: number,
        businessReason: string,
        productName: string,
        publisher: string,
        version: string,
        edition: string,
        releaseDate: string,
        standard: boolean,
        costs: number,
        price: number,
        timeperiod: string,
        logo: string,
        requirements: string[],
        location: string,
        linkToWebsite: string,
        externalID: number,
        prereqireties: string[],
        functionality: string,
        departement: string[],
        role: string[],
        category: string,
        tags: string[],
        name: string,
        descripton: string,
        technicalOwner: string,
        businessOwner: string,
        contractOwner: string,
        OLA: string,
        appClassification: string,
        lifecycleState: string,
        SWOApproved: string,
        approvalType: string,
        internalID: number,
        licenseModel: string,
        licenseLevel: string,
        ){
        this.index = index
        this.businessReason = businessReason
        this.productName = productName
        this.publisher = publisher
        this.version = version
        this.edition = edition
        this.releaseDate = releaseDate
        this.standard = standard
        this.costs = costs
        this.price = price
        this.timeperiod = timeperiod
        this.logo = logo
        this.requirements = requirements
        this.location = location
        this.linkToWebsite = linkToWebsite
        this.externalID = externalID
        this.prereqireties = prereqireties
        this.functionality = functionality
        this.departement = departement
        this.role = role
        this.category = category
        this.tags = tags
        this.name = name
        this.descripton = descripton
        this.technicalOwner = technicalOwner
        this.businessOwner = businessOwner
        this.contractOwner = contractOwner
        this.OLA = OLA
        this.appClassification = appClassification
        this.lifecycleState = lifecycleState
        this.SWOApproved = SWOApproved
        this.approvalType = approvalType
        this.internalID = internalID
        this.licenseModel = licenseModel
        this.licenseLevel = licenseLevel
        }
}
