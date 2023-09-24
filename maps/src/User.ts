import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        // fAKER WILL RETURN sTRING
        // BUT WE NEED NUMBER
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerTextContent(): string {
        return `User Name: ${this.name}`;
    }
}