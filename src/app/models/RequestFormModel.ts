export class RequestForm {
  employeeID: string;
  productName: string;
  name: string;
  email: string;
  departement: string;
  reason: string;
  edition?: string;
  costcenter?: string;
  upn?: string;
  CDG?: string;
  contact?: string;
  internalID?: string;
  externalID?: string;
  location?: string;
  manager?: string;


  constructor(
    employeeID: string,
    productName: string,
    name: string,
    email: string,
    departement: string,
    reason: string,
    edition?: string,
    costcenter?: string,
    upn?: string,
    CDG?: string,
    contact?: string,
    internalID?: string,
    externalID?: string,
    location?: string,
    manager?: string,

  ) {
    this.employeeID= employeeID;
    this.productName = productName;
    this.name = name;
    this.email = email;
    this.departement = departement;
    this.reason = reason;
    this.edition = edition || '';
    this.costcenter = costcenter || '';
    this.upn = upn || '';
    this.CDG = CDG || '';
    this.contact = contact || '';
    this.internalID = internalID || '';
    this.externalID = externalID || '';
    this.location = location || '';
    this.manager = manager || '';

  }
}
