export class Basket {
    index: number;
    logo: string;
    publisher: string;
    productName: string;


    constructor(index: number, logo: string, publisher: string, productName:string) {
        this.index = index;
        this.logo = logo;
        this.publisher = publisher;
        this.productName = productName;
    }
}