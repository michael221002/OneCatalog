export class GraphProfil {
    odata_context: string;
    businessPhones: any[];
    displayName: string;
    givenName: string;
    jobTitle: string;
    mail: string;
    mobilePhone: null;
    officeLocation: string;
    preferredLanguage: any;
    surname: string | undefined;
    userPrincipalName: string;
    id: string

    constructor(
        odata_context: string,
        businessPhones: any[],
        displayName: string,
        givenName: string,
        jobTitle: string,
        mail: string,
        mobilePhone: null,
        officeLocation: string,
        preferredLanguage: any,
        surname: string | undefined,
        userPrincipalName: string,
        id: string
    ){
        this.odata_context = odata_context;
        this.businessPhones = businessPhones;
        this.displayName = displayName;
        this.givenName = givenName;
        this.jobTitle = jobTitle;
        this.mail = mail;
        this.mobilePhone = mobilePhone;
        this.officeLocation = officeLocation;
        this.preferredLanguage = preferredLanguage;
        this.surname = surname;
        this.userPrincipalName = userPrincipalName;
        this.id = id;
    }
}