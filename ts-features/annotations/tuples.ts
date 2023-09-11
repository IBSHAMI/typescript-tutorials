// What are tuples?
// Array-like structure where each element represents some property of a record

// Example of a tuple:
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// Tuple:
const pepsi: [string, boolean, number] = ['brown', true, 40]; // we lose property information
// order of elements is important

// Type alias:
type Drink = [string, boolean, number];
// we can define a type so we can reuse it

const sprite: Drink = ['clear', true, 40];


// why we use tuples?
// we use tuples when we want to represent a record with some number of fields (properties)
// each field (property) in the record will be represented by some value

// Sometimes the name of the property is not important. but usually it is important.
// it can cause confusion if we use tuples sometimes. 
