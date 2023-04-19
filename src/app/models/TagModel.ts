export class Tag {
    functionality: string = '';
    departement: string = '';
    role: string = '';
    category: string[] = [];

    constructor(
        functionality: string,
        depatement: string,
        role: string,
        category: string[]
                ) {
            this.functionality = functionality;
            this.departement = depatement;
            this.role = role;
            this.category = category;
  }
}
