
//task 1

let a = {
    name: "static",
    count: 0
};

function foo(a, count, countNum) {
    let arrAnswer1 = [];

    for (var i = 0; i < countNum; i++) {
        a[count] = i;
        var objAns = Object.assign({}, a)
        arrAnswer1.push(objAns);
    }
    return arrAnswer1;
}
console.log(foo(a, 'count', 10));



//task 2

function generateNumber(startNum, endNum) {
    let arr2 = [];
    do {
        let newNumber = Math.ceil(Math.random() * (endNum - startNum)) + startNum;
        (arr2.includes(newNumber) == true) ? console.log("try again")
            : arr2.push(newNumber);
    } while (arr2.length < (endNum - startNum))
    //console.log(arr2.sort((a,b) => a-b))
    return arr2;
};
console.log(generateNumber(0, 100))



//task 3

let student = {
    name: 'Дмитрий',
    surname: 'Пупкинг',
    age: 75,
    interests: [
        "аптеки",
        "доктора",
        "рассада",
        "обучение в университе"
    ],
    institution: 'Оксфордский крестьянский университет',
    studentCrasher() {
        let { name, surname, age, interests, institution } = this;
        console.log("Имя: " + name, surname + ". Возраст: " + age + ". Инетерсы: " + interests + ". Oбразование: " + institution)
    }
}
student.studentCrasher();



//task4

function square(x, n) {
    return (n === 1) ? x : (x * square(x, n - 1));
}



//task4

let arr = [
    { 'price': 10, 'count': 2 },
    { 'price': 5, 'count': 5 },
    { 'price': 8, 'count': 5 },
    { 'price': 12, 'count': 4 },
    { 'price': 8, 'count': 4 },
];

arr.sort(function (a, b) {
    return a.price-b.price;
});

console.log(arr)