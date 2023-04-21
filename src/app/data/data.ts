import { Product } from '../models/ProductModel';


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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
            ["SWOmie", "Developer"],
            "germany",
            "https://code.visualstudio.com/",
            12345,
            ["node js", "windows"],
            'Softwaredeveleopmenttool',
            'BIT',
            'Software Engineer',
            'Codeeditor',
            [
                'BIT',
                'CIT',
                'Microsoft',
                'VS Code',
                'Code editor',
                'Visual Studio Code',
                'Visual Studio Code kostenlos'
            ]
        ),
        new Product(
            4321,
            "With Visual Studio here we work on the SWO Website and Pyracloud",
            "Visual Studio Code",
            "Microsoft Inc.",
            "5.7",
            "Community Edition,",
            "2.8.2022",
            false,
            0,
            0,
            'monthly',
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
            ["SWOmie", "Developer"],
            "germany",
            "https://code.visualstudio.com/",
            12345,
            ["node js", "windows"],
            'Softwaredeveleopmenttool',
            'BIT',
            'Software Engineer',
            'Codeeditor',
            [
                'BIT',
                'CIT',
                'Microsoft',
                'VS Code',
                'Code editor',
                'Visual Studio Code',
                'Visual Studio Code kostenlos'
            ]
        ),
    ];

}