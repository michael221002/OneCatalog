import { Product } from '../models/ProductsModel';


interface Tag {
    functionality: string;
    departement: string;
    role: string;
    category: string[];
}


export class Products {
    Products: Product[] = [ 
        new Product(
            1234,
            "With Visual Studio here we work on the SWO Website and Pyracloud",
            "Visual Studio Code",
            "Microsoft Inc.",
            "5.7",
            "Community Edition,",
            "2.8.2022",
            true,
            0,
            0,
            undefined,
            [
                'BIT',
                'Dev',
                'Software Engineer',
                "Webdeveleopment",
            ],
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
            ["SWOmie", "Developer"],
            "germany",
            "https://code.visualstudio.com/",
            12345,
            ["node js", "windows"]
        ),
        new Product(
            1234,
            "With Visual Studio here we work on the SWO Website and Pyracloud",
            "Visual Studio Code",
            "Microsoft Inc.",
            "5.7",
            "Community Edition,",
            "2.8.2022",
            false,
            0,
            0,
            undefined,
            [
                'Dev',
                'BIT',
                'Software Engineer',
                "Webdeveleopment",
            ],
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
            ["SWOmie", "Developer"],
            "germany",
            "https://code.visualstudio.com/",
            12345,
            ["node js", "windows"]
        )
    ];

}