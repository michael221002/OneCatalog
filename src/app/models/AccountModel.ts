export class Account {
    upn: string;
    image: string;
    mail: string;
    name: string;
    employeeId: number;
    role: string;
    department: string;
    reportsTo: string
    location: string;
    costCenter: string;

    constructor(upn: string, image: string, mail: string, name: string, employeeID: number, role: string, departement: string, reportsTo: string, location: string, costcenter: string){
        this.upn = upn;
        this.image = image;
        this.mail = mail;
        this.name = name;
        this.employeeId = employeeID;
        this.role = role;
        this.department = departement;
        this.reportsTo = reportsTo;
        this.location = location;
        this.costCenter = costcenter;
    }
}
