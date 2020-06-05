//Task1 
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Cart {
    constructor() {
        this.arrCart = [];
        this.quantity = 0;
        this.orderTotal = 0;
        this.addFunc = function (...value) {
            this.arrCart.push(...value);
            this.quantity = this.arrCart.length;
        };
        this.orderTotalcalc = () => {
            for (i = 0; i < this.quantity; i++) {
                this.orderTotal += this.arrCart[i]["price"];
            }
        };
    }
}
;

let door = new Item ("door", 99.90);
let kettle = new Item ("kettle", 13.99);
let dimaCart = new Cart();
dimaCart.addFunc(door,kettle)
dimaCart.orderTotalcalc();

console.log(dimaCart.orderTotal+" length: "+ dimaCart.quantity);



//Task2
class Man {
    constructor(name, age, gender, arrInterest) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.arrInterest = arrInterest;
        this.toString = () => {
            return `
        Человек: ${this.name}. 
        Возраст: ${this.age} лет. 
        Пол: ${this.gender}. 
        Интересы: ${this.arrInterest}.`;
        };
    }
}

class Student {
    constructor(name, age, gender, arrInterest, univer) {
        Man.call(this, name, age, gender, arrInterest);
        this.univer = univer;
        this.toString = () => ` 
        Студент: ${this.name}.
        Возраст: ${this.age} лет.
        Пол: ${this.gender}.
        Интересы: ${this.arrInterest}.
        Университет: ${this.univer}.`;
    }
}

let newStud = new Student ("Ioan", 23, "male", ["html","css","js"], "ITMO");
console.log(newStud.toString());


