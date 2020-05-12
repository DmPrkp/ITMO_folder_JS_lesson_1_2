//task1
//let inputMonthNomber = prompt ("Введите номер месяца: ");
let inputMonthNomber = 33
let monthNomber = parseInt(inputMonthNomber)

switch (monthNomber) {
    case 12:
    case 1:
    case 2: 
        console.log("Зима");
        break;
    case 3: 
    case 4: 
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8: 
        console.log("Лето");
        break;
    case 9: 
    case 10: 
    case 11: 
        console.log("Осень");
        break;
    default: console.log("there is no month with that number or operator switch is crashed")
};



//task2
let unitOfMeasure = 4;
/*  1-дециметр
    2-километр
    3-метр
    4-миллиметр
    5-санитиметр */
let valueNumber = 64564;

let ValueWithMeterUnits = (valueNumber, unitOfMeasure) => {
    if (unitOfMeasure === 1) {
        return (valueNumber / 10);
    } else if (unitOfMeasure === 2) {
        return (valueNumber * 1000);
    } else if (unitOfMeasure === 3) {
        return (valueNumber)
    } else if (unitOfMeasure === 4) {
        return (valueNumber / 1000);
    } else if (unitOfMeasure === 5) {
        return (valueNumber / 100);
    } else {
        console.log("there is no unit with that number or our Function is crashed")
    };
};
console.log(`length is equal ${ValueWithMeterUnits(valueNumber, unitOfMeasure)} meters`);



//task3
let randomNum = Math.floor((Math.random() * 2000) - 1000);
//let randomNum = 0
var answer = ["number"]

//ДАННЫЕ ПРОВЕРКИ НУЖНО ПРОВОДИТЬ ВЕЗДЕ ГДЕ ЗНАЧЕНИЕ ЗАДЕТ ПОЛЗОВАТЕЛЬ, ДЛЯ ЭКОНОМИИ ВРЕМЕНИ В ЭТОЙ ДОМАШНЕЙ РАБОТЕ Я ИХ БОЛЬШЕ ЗАДАВАТЬ НЕ БУДУ
//проверка на то что содержимое пременной является числом
if (isNaN(randomNum)) {
    document.write(randomNum + " is not a number");
} else {
    //проверка на то что содержимое переменной лежит в диапозоне от -999 до 999
    if (randomNum < -999 || randomNum > 999) {
        document.write(`${randomNum} is more than 999 or less than -999 <br/>`)
    } else {
        //проверка не является ли число нулем
        if (randomNum === 0) {
            document.write(`${randomNum} - null<br/>`)
        } else {
            if (randomNum < 0) {
                answer.push(["negative"])
                if (-10 < randomNum && randomNum < 0) { answer.push(["single-digit"]) }
                else if (-100 < randomNum && randomNum < -9) { answer.push(["double-digit"]) }
                else { answer.push(["triple-digit"]) };
                document.write(randomNum + " -" + answer[1] + " " + answer[2] + " " + answer[0] + ".<br/>")
            }
            else {
                answer.push(["positive"])
                if (0 < randomNum && randomNum < 10) { answer.push(["single-digit"]) }
                else if (9 < randomNum && randomNum < 100) { answer.push(["double-digit"]) }
                else { answer.push(["triple-digit"]) };
                document.write(randomNum + " -" + answer[1] + " " + answer[2] + " " + answer[0] + ".<br/>")
            }
        }
    }
}



//task4

for (let i=1; i < 101; i++) {
    if (i%3 === 0 && i%5 ===0) {
        console.log ("threefive")
    } else if (i%3 === 0) {
        console.log ("three")
    } else if (i%5 === 0) {
        console.log ("five")
    } else {
        console.log (i)
    }
}



//task5
let yourYear = parseInt(prompt("enter your birthday date"));

if (isNaN(yourYear)) {
    document.write("у Вас слишком уникальный год рождения<br/>");
} else { 
    if (yourYear%400 === 0) {
        document.write(yourYear + " - високостный год<br/>");
    } else if (yourYear%100 === 0) {
        document.write(yourYear + " - не високостный год<br/>");
    } else if (yourYear%4 === 0) {
        document.write(yourYear + " - високостный год<br/>");
    } else {
        document.write(yourYear + " - не високостный год<br/>");
    }
}



//task6
var plates = Math.floor(Math.random()*50)
var fairy = Math.floor(Math.random()*50)
console.log (plates, fairy)

while (plates>0 && fairy>0) {
    plates--;
    fairy = fairy-0.5;
    console.log (plates, fairy)
} 
if (plates > fairy) {
    console.log (`Хозяин, ${plates} тарелок не помыли, средство закончилось:(`)
} else {
    console.log (`осталось ${fairy}л моющего средствa`)
}