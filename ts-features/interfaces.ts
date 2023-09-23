const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    }
};


// without interface:
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
}

printVehicle(oldCivic);


// What is interface?
// An interface is a new type, describing the property names and value types of an object.

// Example of an interface:
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

// now we can use the interface as a type annotation:
const printVehicleWithInterface = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
    console.log(vehicle.summary());
}

printVehicleWithInterface(oldCivic);

// We dont have to use interface to describe all the properties of an object.
// We can use it to classify objects, and check if they belong to a certain group.
// example:
// to check if car that can be sold:
interface isSellable {
    price: number;
}

// Then to check if a car is sellable, we can use the interface:
const printVehicleWithInterface2 = (vehicle: Vehicle & isSellable): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
    console.log(vehicle.summary());
    console.log(`Price: ${vehicle.price}`);
}




