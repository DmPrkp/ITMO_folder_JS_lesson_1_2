
//task1
let A = [12, 4, 3, 10, 1, 20];
let B = [-3, -7, -100, -33];
let C = A.concat(B);
console.log(C);



//task2
var area = [ null, null, 1, null, null, 0, null, 1, null ]

let table = `
    <table>
        <tbody>
            <tr><td> ${area[0]} </td><td>${area[1]}</td> <td>${area[2]}</tr>
            <tr><td> ${area[3]} </td><td>${area[4]}</td> <td>${area[5]}</tr>
            <tr><td> ${area[6]} </td><td>${area[7]}</td> <td>${area[8]}</tr>
        </tbody>
    </table>
`
document.write(table);



//task3 QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
const arrTask3 = [12,4,3,10,1,20];
let arrCopy = arrTask3

let answerArr = arrTask3.sort(function(a, b) {
    return a - b;
  });

let maxDown = answerArr.pop();
let minDown = answerArr.shift();
console.log (answerArr, arrCopy, arrTask3)

//task4
var counter = 0;

/*let numberCnv = (num) => {
    if (num.length < 2) {
        num += "0";
    } else if (num.length < 3)
}*/

for (let i=0; i<=99; i++) {
    for (let j=1; j<=99; j++) {
        let strI = i.toString();
            let arrI = strI.split('');
                var resultI = arrI.reduce((a, b) => (parseFloat(a) + parseFloat(b)));       
        let strJ = j.toString();
            let arrJ = strJ.split('');
                var resultJ = arrJ.reduce((a, b) => (parseFloat(a) + parseFloat(b)));
        if (resultI == resultJ) {
            counter++;
            //console.log(`Совпадение ${counter}:(${resultI} ${resultJ})`);            
        }
    }        
}

console.log(`${counter} - совпадений`);   

