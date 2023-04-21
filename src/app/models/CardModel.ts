export class Card {
  internalID: number;
  logo: string;
  standard: boolean;
  publisher: string;
  costs: number;
  price: number;
  timeperiod: string | undefined;
  productName: string;
  externalID: number;
  tags: string[];
  category: string;
  edition: string;

  constructor(
    internalID: number,
    logo: string,
    standard: boolean,
    publisher: string,
    costs: number,
    price: number,
    timeperiod:string | undefined,
    productName: string,
    externalID: number,
    tags: string[],
    category: string,
    edition: string
  ) {
    this.internalID = internalID;
    this.logo = logo;
    this.standard = standard;
    this.publisher = publisher;
    this.costs = costs;
    this.price = price;
    this.productName = productName;
    this.externalID = externalID;
    this.timeperiod = timeperiod;
    this.tags = tags;
    this.category = category;
    this.edition = edition;
  }
}

