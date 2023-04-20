import { Tag } from "./TagModel";

export class Card {
  internalID: number;
  logo: string;
  standard: boolean;
  publisher: string;
  costs: number;
  price: number;
  timeperiod: string | undefined;
  tags: Tag;
  productName: string;
  externalID: number;

  constructor(
    internalID: number,
    logo: string,
    standard: boolean,
    publisher: string,
    costs: number,
    price: number,
    timeperiod:string | undefined,
    tags: Tag,
    productName: string,
    externalID: number
  ) {
    this.internalID = internalID;
    this.logo = logo;
    this.standard = standard;
    this.publisher = publisher;
    this.costs = costs;
    this.price = price;
    this.tags = tags;
    this.productName = productName;
    this.externalID = externalID;

    timeperiod = null ?  this.timeperiod = 'permanent' : this.timeperiod = timeperiod;
  }
}

