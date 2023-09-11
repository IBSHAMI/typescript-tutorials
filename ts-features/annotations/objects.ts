// PROFILE 
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void { // annotation for method
        this.age = age;
    }
};

// DESTRUCTURING
const { age }: { age: number } = profile; // destructuring
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile; // destructuring
