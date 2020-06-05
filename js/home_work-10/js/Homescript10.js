

//Task1 
function Item (name, price) {
    this.name = name;
    this.price = price;
}

function Cart() {
    this.arrCart = [];
    this.quantity = 0;
    this.orderTotal = 0;   

    this.addFunc = function(...value) {
        this.arrCart.push(...value);
        this.quantity = this.arrCart.length;
    }

    this.orderTotalcalc = () => {
        for (i=0; i<this.quantity; i++) {
            this.orderTotal+=this.arrCart[i]["price"];
        }
    }
};

let door = new Item ("door", 99.90);
let kettle = new Item ("kettle", 13.99);
let dimaCart = new Cart();
dimaCart.addFunc(door,kettle)
dimaCart.orderTotalcalc();

console.log(dimaCart.orderTotal+" length: "+ dimaCart.quantity);



//Task2

function Man (name, age, gender, arrInterest) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.arrInterest = arrInterest;

    this.toString = () => {
        return `
        Человек: ${this.name}. 
        Возраст: ${this.age} лет. 
        Пол: ${this.gender}. 
        Интересы: ${this.arrInterest}.`
    }
}

function Student (name, age, gender, arrInterest, univer) {
    Man.call(this, name, age, gender, arrInterest);
    this.univer = univer;
    this.toString = () => ` 
        Студент: ${this.name}.
        Возраст: ${this.age} лет.
        Пол: ${this.gender}.
        Интересы: ${this.arrInterest}.
        Университет: ${this.univer}.`
}

let newStud = new Student ("Ioan", 23, "male", ["html","css","js"], "ITMO");
console.log(newStud.toString());



//Task3

function User() {
    this.toString = function () {
        console.log(this.firstName)
    }    
};
User.userCreate = function(value) {
    let string = new User();
    string.firstName = value.firstName;
    string.age = value.age;    
    return string;    
};
User.anonimName = function () {
    let string = new User();
    string.firstName = "anonimus";
    return string;
}

var anonim = User.anonimName();
anonim.toString();

var regUser = User.userCreate({
    firstName: "Dima",
    age: 99,
});
regUser.toString();



//Task4



//Task5

function Mammal(firstName, secondName="") {
    this._firstName = firstName;
    this._secondName = secondName;
};

function Student(firstName, secondName) {
    Mammal.call(this, firstName, secondName),
    this._role = "student";

    this.studyDirection = function(course) {
        this._studyDirection = course._studyDirection;
        this._specialization = course._specialization;
        this._durationDay = course._durationDay;
    }
};

function Teacher(firstName, secondName) {
    Mammal.call(this, firstName, secondName),
    this._role = "teacher";

    this.studyDirection = function(course) {
        this._studyDirection = course._studyDirection;
        this._specialization = course._specialization;
        this._durationDay = course._durationDay;
    }
};

function Courses(studyDirection, specialization, duration) {
    this._studyDirection = studyDirection;
    this._specialization = specialization;
    this._durationDay = duration;

    this.groupCreater = function(teacher, student) {
        this._teacher = teacher;
        this._student = `${student._firstName} ${student._secondName}`;
    }
}

let course1 = new Courses("front-end","layout","91");
let teacher1 = new Teacher("Oleg","Olegovich");
let student1 = new Student("Mirzoeb");

student1.studyDirection(course1);
teacher1.studyDirection(course1);
course1.groupCreater(teacher1, student1)


console.log(course1, teacher1, student1);
