// Annotation for function
// We tell TS what type of parameters a function will receive and what type of values it will return.

// Inferece for function
// TS will try to figure out what type of value a function will return for us.
// But we will still add type annotation for the parameters.

const add = (a: number, b: number): number => {
    return a + b;
}

function divide(a: number, b: number): number {
    return a / b;
}

// We will always use type inference for return value.
// Thats because we want to make sure that we are returning the right type of value.
// If we forget to return a value, TS will assume that we are returning void.
// Thats why we need to add type annotation for return value.


const logger = (message: string): void => { // void means that we are not returning anything.
    console.log(message); // we can return null or undefined for void type.
}

const throwError = (message: string): never => { // never means that we are never going to reach the end of the function.
    throw new Error(message);
}


// destructuring with annotations
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (todaysWeather: { date: Date, weather: string }): void => {
    console.log(todaysWeather.date);
    console.log(todaysWeather.weather);
}

// ES2015
const logWeatherES2015 = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
}

logWeatherES2015(todaysWeather);
logWeather(todaysWeather);

