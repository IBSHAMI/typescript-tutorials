// Class
class Vehicle {
    drive(): void {
        console.log('chugga chugga');
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
    }
}


const vehicle = new Vehicle();
vehicle.drive();


// Class modifiers:
// public: This method can be called any where, any time.
// private: This method can only be called by other methods in this class.
// protected: This method can be called by other methods in this class, or by other methods in child classes.


// By default, all methods are public.



// fields:
// Fields are properties defined inside a class.
// Fields are public by default.
// example:
class Vehicle2 {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    drive(): void {
        console.log('chugga chugga');
    }

    protected honk(): void {
        console.log('beep');
    }
}