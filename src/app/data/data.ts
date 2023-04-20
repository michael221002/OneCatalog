import { Tag } from '../models/TagModel';
import { Product } from '../models/ProductsModel';

export class Products {
    Products: { [key: number]: Product } = { 
        1234: new Product(
            1234,
            "With Visual Studio here we work on the SWO Website and Pyracloud",
            "Visual Studio Code Community Edition",
            "Microsoft Inc.",
            "5.7",
            "community,",
            "2.8.2022",
            true,
            0,
            0,
            undefined,
            new Tag (
                'Softwaredevelopment',
                'BIT',
                'Software Engineer',
                ["Webdeveleopment", "API-Develeopment"]
            ),
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
            ["SWOmie", "Developer"],
            "germany",
            "https://code.visualstudio.com/",
            12345,
            ["node js", "windows"]
        )
    };


}