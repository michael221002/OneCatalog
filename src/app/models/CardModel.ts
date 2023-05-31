export class Card {
  index: number;
  logo: string;
  standard: boolean;
  publisher: string;
  costs: number;
  price: number;
  timeperiod: string | undefined;
  name: string;
  tags: string[];
  category: string;
  edition: string;

  constructor(
    index: number,
    logo: string,
    standard: boolean,
    publisher: string,
    costs: number,
    price: number,
    timeperiod:string | undefined,
    name: string,
    tags: string[],
    category: string,
    edition: string
  ) {
    this.index = index;
    this.logo = logo;
    this.standard = standard;
    this.publisher = publisher;
    this.costs = costs;
    this.price = price;
    this.name = name;
    this.timeperiod = timeperiod;
    this.tags = tags;
    this.category = category;
    this.edition = edition;
  }
}

