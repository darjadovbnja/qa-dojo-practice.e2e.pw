import { log } from "console";

class Car {
    brand: string;
    color: string;
    constructor(color: string, brand: string) {
        this.brand = brand;
        this.color = color;
    }
}

const someCar = new Car('bmw', 'blue')
console.log(someCar);
