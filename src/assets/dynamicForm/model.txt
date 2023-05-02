export class profile{
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    street: string; 
    city: string; 
    postNumber: number;
    
    constructor(
        firstName?: string,
        lastName?: string,
        age?: number,
        email?: string,
        password?: string,
        street?: string, 
        city?: string, 
        postNumber?: number,
    ){
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.age = age || 0;
        this.email = email || '';
        this.password = password || '';
        this.street = street || '';
        this.city = city || '';
        this.postNumber = postNumber || 12345;
    }

}