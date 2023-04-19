import { Tag } from "./TagModel";

export class Card {
  internalID: number;
  logo?: string;
  standard: boolean | undefined;
  name: string | undefined;
  publisher: string | undefined;
  costs?: number;
  price?: number;
  timeperiod?: string = 'permanent';
  tags?: Tag;
  productname: string | undefined;
  externalID?: number;

  constructor(
    internalID: number,
    logo?: string,
    standard?: boolean,
    name?: string,
    publisher?: string,
    costs?: number,
    price?: number,
    timeperiod? :string,
    tags?: Tag,
    productname?: string,
    externalID?: number
  ) {
    this.internalID = internalID;
    this.logo = logo;
    this.standard = standard;
    this.name = name;
    this.publisher = publisher;
    this.costs = costs;
    this.price = price;
    this.timeperiod = timeperiod
    this.tags = tags;
    this.productname = productname;
    this.externalID = externalID;

    if (timeperiod == null) {
      this.timeperiod = 'permanent';
    }
  }
}

