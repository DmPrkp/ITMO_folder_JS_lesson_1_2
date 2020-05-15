
//task 1

let arr1 = [1, 3, 4, 4, 6]
let arr2 = [1, 2, 4, 4, 6]
let arr3 = [1, 2, 4, 4, 6, 7]

function ArrComparison (Array1, Array2) {
    let cnt = 0;
    if(arr1.length === arr2.length) {
        for (i=0; i<arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                cnt++;
            } else {
                break;
            }
        }
    }
    if (arr1.length == cnt) {
        return true;
    } else {return false;}
}

console.log(ArrComparison(arr1, arr2));
console.log(ArrComparison(arr2, arr3));



//task 2

function ArrConstructor (firstValue, lastValue, step=1) {
    let summ = step + firstValue;
    var arrTask2 = [firstValue];
    for (summ; summ < lastValue; summ+=step) {       
       arrTask2.push(summ)
    }
    arrTask2.push(lastValue);
    return arrTask2;
}

console.log(ArrConstructor(1, 12, 3));



//task 3

let student = {
    name: 'Dmitri',
    surname: 'Pupking',
    age: 75,
    interests: [
        "drugstore",        
        "doctors",
        "market garden",
        "study in university"
    ],
    institution: 'Garward',
}

function StudentCrasher (prop) {  
    let {name, surname, age, interests, institution} = prop;  
    console.log(name, surname, age, interests, institution)
}

StudentCrasher (student);



/*task4* 

Написать генератор случайных “русских слов”. Сформировать слово используя правила:
- определить длину слова случайно, но в диапазоне от 3 до 5 букв;
- начинать слово с гласной или согласной (определить случайно);
- чередовать гласные и согласные буквы в слове;
- буквы выбираются случайно.*/



