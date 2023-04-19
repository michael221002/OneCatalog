import { Tag } from '../models/TagModel';
import { Card } from '../models/CardModel';

export class Products {
    Products: Card[] = [
        
        new Card(
        1234,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
        true,
        "Visual Studio Code",
        "Microsoft Inc.",
        0,
        0,
        undefined,
        new Tag (
            'Softwaredevelopment',
            'BIT',
            'Software Engineer',
            ["Webdeveleopment", "API-Develeopment"]
        ),
        "Visual Studio Code Community Edition",
        12345,
        )

    ];
}