const apples: number = 5;
// The type annotation for apples is : number
// This tells TS that apples should only ever be assigned a value of type number.
// If user ever tried to reassign apples to a value that is not a number, TS would throw an error.
// apples = 'apple'; // error: Type '"apple"' is not assignable to type 'number'.


// examples for primitive types:
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects:
let now: Date = new Date();

// Array: we can use type annotation to tell TS 
// We want an array that will only ever contain strings, numbers or ...
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, true];

// classes:
class Car { }
let car: Car = new Car();

// object literal:
// we can use type annotation to tell TS the type of value each property in the object will have
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// function:

// We add type annotations for each of the arguments the function will receive.
// We also add a type annotation for the value the function will return.
// void means that this function will not return anything.
const newFun = (i: number): void => {
    console.log(i);
}

// When to use annotations:
// 1. Function that returns the 'any' type:
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // this will return any type
console.log(coordinates); // {x: 10, y: 20};
// 2. When we declare a variable on one line and initialize it later:
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // we don't know what the value of foundWord will be yet    
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true; // we know that foundWord will be a boolean
    }
}
// 3. Variable whose type cannot be inferred correctly:
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // we don't know what the value of numberAboveZero will be yet
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]; // we know that numberAboveZero will be a boolean or a number
    }
}





