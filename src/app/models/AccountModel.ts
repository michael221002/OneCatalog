export class Account {
    upn: string | undefined;
    image: string | undefined;
    mail: string | undefined;
    name: string | undefined;
    employeeId: number | undefined;
    role: string | undefined;
    department: string | undefined;
    reportsTo: string | undefined;
    location: string | undefined;
    costCenter: string | undefined;

    constructor(upn?: string, image?: string, mail?: string, name?: string, employeeID?: number, role?: string, departement?: string, reportsTo?: string, location?: string, costcenter?: string){
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
