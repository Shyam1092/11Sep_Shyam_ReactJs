// Create a JavaScript object car with properties brand, model, and year. Use JavaScript to:
// Access and print the car’s brand and model.

class Car {
    constructor(model, brand) {

        this.model = model;
        this.brand = brand;

    }
}
var obj = new Car("toyota-corolla", "toyota");  //new Car() is an object of class Car 
console.log(obj);