export class Location {
    state: string;
    region: string;
    address: string;

    constructor(state: string, region: string, address: string) {
        this.state = state;
        this.region = region;
        this.address = address; 
    }
}