export class Imovel {
    name: string;
    modality: string;
    type: string;
    address: Location;
    description: string;
    photos: string[];
    map_link: string;

    constructor(name: string, modal: string, type: string, address: Location, desc: string) {

        this.name = name;
        this.modality = modal;
        this.type = type;
        this.address = address;
        this.description = desc;
    }
}