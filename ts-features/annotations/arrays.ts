// WHAT IS TYPES ARRAYS?
// Arrays - collection of records with some arbitrary sort order
// TYPED ARRAYS ARE SIMILAR TO ARRAYS AND HAVE ALL THE SAME METHODS
// BUT EACH ELEMENT IS SOME CONSISTENT TYPE OF VALUE INSTEAD OF JUST ANY VALUE

// EXAMPLES 
const carMakers = ['ford', 'toyota', 'chevy']; // type inference for it is string[]
const dates = [new Date(), new Date()]; // type inference for it is Date[]

// if we initialize an empty array, we need to add type annotation
const carsByMake = []; // type inference for it is any[]

const arrayOfArray = [
    ['f150'],
    ['corolla'],
    ['camaro']
]; // type inference for it is string[][]
// array that contains arrays of strings

// Why we used typed arrays?
// 1. TS can do type inference when extracting values from an array - example below
const carTest = carMakers[0]; // type inference for it is string
// 2. TS can prevent us from adding incompatible values to the array - example below
// carMakers.push(100); // error
// 3. We can get help with 'map', 'forEach', 'reduce' functions - example below
carMakers.map((car: string): string => {
    return car.toUpperCase();
});
// 4. Flexible - arrays can still contain multiple different types - example below
const importantDates = [new Date(), '2030-10-10']; // type inference for it is (string | Date)[]

// WHEN TO USE TYPED ARRAYS?
// Any time we need to represent a collection of records with some arbitrary sort order