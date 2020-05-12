console.log("inform");

var login;
let password;

login="admin";
password = "123"

const PI = 3.14;

console.log(login);
console.log(password);

var height, width;
//let height = 123, width = 222;

console.log(height);
console.log(width);

//string
height = 23.4
width = '7j\t  \e 89'
console.log(width);

//logic type
let active = true;
let stopped = false;
console.log(active);

console.log (typeof height)

//type compiller
let age = '13 age'
let ageNum = parseInt(age);
console.log(ageNum)

let height2 = '300.67px';
let heightNum = parseFloat(height2);
console.log(heightNum);
console.log(typeof heightNum);

console.log(3 + 5);
console.log('3' + 5); //'35'
console.log(+'3' + 5); //8
console.log("asd" + "sdf");

console.log(34 / '2'); //17
console.log(34 - '2'); //32
console.log(3 * '2'); //6

console.log(34 / "str"); //NaN
console.log(isNaN("23")) //false
console.log(isNaN("true")) //false

console.log(34/0); //Infinity
console.log(0/0); //Nan

console.log(3%2); //1
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let a = 12;
a = a+12;
a +=12;

let b = 2 ** 0.5;
console.log (b);

//Операторы сравнения
// > < >= <=
// == !=
// === !==

console.log(123 > '13'); //true
console.log('asd' > 'azd'); //false
console.log('13' == 13); //true 
console.log('13' === 13); //false

//инкремент ++ и декремент --
var num = 2;
console.log(++num); //3
console.log(num); //3

var num = 2;
console.log(num++); //2
console.log(num); //3

/*var i = 4;
i = i++;
console.log(i);*/ //4

/*var x = 3;
var z = (++x)++;
console.log(z);*/ //5

// (условие) ? значение1 : значение2;

let num1 = -10;
let res = (num1 > 0) ? num1 : -num1;
console.log(res); 

let data = prompt('input');
console.log(data);

document.body.innerHTML = data;