export class Tag {
    functionality: string = '';
    departement: string = '';
    role: string = '';
    category: string[] = [];

    constructor(
        functionality: string,
        departement: string,
        role: string,
        category: string[]
                ) {
            this.functionality = functionality;
            this.departement = departement;
            this.role = role;
            this.category = category;
  }
}
