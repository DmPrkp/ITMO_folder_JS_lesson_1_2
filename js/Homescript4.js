
//Task1 

let str1 = `1111112121312312312312`

arr1 = str1.match(/[0-9]/ig);
var summArr1 = 0;

for (let n of arr1) {	
	var summArr1 = summArr1 + parseFloat(n);
}

console.log(summArr1)


//Task2

let str2 = `Д@н@ стр0ка и симв0л. Удв0ить! к@жд0е вх0ждение симв0л@ в стр0ку.`;
console.log(str2);
let [...arr2] = str2;

var resultArr2 = [];

for (let n of arr2) {	
	(/[^а-яa-z]/i.test(n)) ? (n = n+n) : n;
	resultArr2.push(n)
}

resultStr2 = resultArr2.join("");
console.log(resultStr2);



//Task3

let str3 = "gjsldj@53534Wrdhf39";
//let str3 = "FF33fFdsfsG65ASDdf343$$";

if (/(.{9,})/g.test(str3)) { 
	if (/(?=.*[a-z])/g.test(str3)) {
		if (/(?=.*[A-Z])/g.test(str3)) {
			if (/(?=.*[^\w\s])/g.test(str3)) {
				if (/(?=.*[0-9])(?=.*[0-9])/g.test(str3)) {
					console.log(`Great password!`)
				} else {console.log(`u need more than two numbers`);}
			} else {console.log(`u need one symbol, like "!, $, &..."`);}
		} else {console.log(`u need one uppercase letter`);}
	} else {console.log(`u need one lowercase letter`);}
} else {console.log(`your password less then 9 symbols`);}



//Task4

let str4 = "Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье";

arr4 = str4.match(/[а-я]+/ig);

console.log(arr4)








