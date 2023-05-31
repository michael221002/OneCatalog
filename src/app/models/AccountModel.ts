export class Account {
    upn: string;
    image: string;
    mail: string;
    name: string;
    employeID: number;
    role: string;
    departement: string;
    reportsTo: string
    location: string;
    costcenter: string;

    constructor(upn: string, image: string, mail: string, name: string, employeeID: number, role: string, departement: string, reportsTo: string, location: string, costcenter: string){
        this.upn = upn;
        this.image = image;
        this.mail = mail;
        this.name = name;
        this.employeID = employeeID;
        this.role = role;
        this.departement = departement;
        this.reportsTo = reportsTo;
        this.location = location;
        this.costcenter = costcenter;
    }
}