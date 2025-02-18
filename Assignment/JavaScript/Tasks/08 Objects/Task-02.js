// Update the year property.

class Car {
    constructor(nm, brand) {
        this.nm = nm;
        this.brand = brand;

    }
}
class Garage extends Car {
    constructor(nm, brand, year) {
        super(nm, brand, year);
        this.year = year;
    }
}
var obj = new Garage("maruti 800", "alto maruti", 2016);
console.log(obj);