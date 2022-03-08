const testMe = (num) => {
    if (num >= 10) {
        return "the num is greater than or equal to 10"
    } else {
        return "the num is less than 10"
    }

    return num >= 10 ? "the num is greater than or equal to 10" : "the num is less than 10"
}

// person ? <p>{person.name}</p> : "loading..."

// console.log(testMe(11));
// -------------------------------

const myBook = {
    title: "my cool JS book",
    pages: 9001,
    publishYear: 2022,
    author: "Goku"
}

class Book{
    constructor(title, pages, publishYear, author){
        console.log(this);
        this.bookTitle = title;
        this.pages = pages;
        this.publishYear = publishYear;
        this.author = author;
    }
}

// const myNewCoolBook = new Book("guide to data structures and algorithms", 300, 1997, "Goku" );
// console.log(myNewCoolBook);

class Vehicle{
    constructor(name, manufacturer, model, color) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 10;
    }

    // methods
    drive() {
        this.miles += 10;
        console.log(`${this.name} has driven ${this.miles} miles`);
        return this
    }

    honk(otherCar) {
        console.log(this.name + " honked at " + otherCar.name);
        return this
    }
}

class Tesla extends Vehicle{
    constructor(manufacturer="Tesla", name, model, color, autopilot = false){
        super(name,  manufacturer, model, color);
        this.autopilot = autopilot;
    }

    drive() {
        this.miles += 30;
        console.log(`${this.name} has driven ${this.miles} miles`);
        return this
    }
}

const sparky = new Tesla("Tesla", "Sparky", "Model x", "White", true);
console.log(sparky);
sparky.drive().drive().drive();


const honda = new Vehicle("trusty", "Honda", "civic", "blue");
const lightning = new Vehicle("McQueen", "stock car", "race car", "red");

console.log("-------------");

sparky.honk(lightning);
console.log("-------------");
lightning.honk(honda);

lightning.drive();
lightning.drive();
lightning.drive();

console.log(honda);
honda.drive();
honda.drive();
honda.drive();
honda.drive();
console.log(honda.miles);