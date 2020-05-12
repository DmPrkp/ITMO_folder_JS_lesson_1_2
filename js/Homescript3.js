
//task1
let A = [12, 4, 3, 10, 1, 20];
let B = [-3, -7, -100, -33];
let C = A.concat(B);
console.log(C);



//task2
var area = [null, null, 1, null, 1, null, 1, 0, 0]

let table = `
    <table>
        <tbody>
            <tr>
                <td> 
                    ${(area[0] === null) ? " " : (
        (area[0] === 1) ? "X" : "O"
    )} 
                </td>
                <td>
                    ${(area[1] === null) ? " " : (
        (area[1] === 1) ? "X" : "O"
    )} 
                </td>
                <td>
                    ${(area[2] === null) ? " " : (
        (area[2] === 1) ? "X" : "O"
    )} 
                </td>
            </tr>
            <tr>
                <td> 
                    ${(area[3] === null) ? " " : (
        (area[3] === 1) ? "X" : "O"
    )} 
                </td>
                <td>
                    ${(area[4] === null) ? " " : (
        (area[4] === 1) ? "X" : "O"
    )} 
                </td>
                <td>
                    ${(area[5] === null) ? " " : (
        (area[5] === 1) ? "X" : "O"
    )} 
                </td>
            </tr>
            <tr>
                <td> 
                    ${(area[6] === null) ? " " : (
        (area[6] === 1) ? "X" : "O"
    )} 
                </td>
                <td>
                    ${(area[7] === null) ? " " : (
        (area[7] === 1) ? "X" : "O"
    )} 
                </td>
                <td>
                    ${(area[8] === null) ? " " : (
        (area[8] === 1) ? "X" : "O"
    )} 
                </td>
            </tr>
            
        </tbody>
    </table>
`
document.write(table);



//task3 
const arrTask3 = [12, 4, 3, 10, 1, 20];
let arrCopy = arrTask3

let answerArr = arrTask3.sort(function (a, b) {
    return a - b;
});

let maxDown = answerArr.pop();
let minDown = answerArr.shift();
console.log(answerArr, arrCopy, arrTask3)



//task4
var counter = 0;

for (let i = 0; i <= 999; i++) {
    for (let j = 1; j <= 999; j++) {
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



//task5 (additional)

//let weights = [2, 71, 4, 7, 42, 40, 8, 25, 5, 4, 47, 8, 3]
let weights = [2,7,4,1,8,1]

let weightSort = weights.sort(function (a, b) {
    return a - b;
});

do {
    let lastDown = weightSort.pop();
    let lastDown2 = weightSort.pop();
    let newMolWeight = lastDown - lastDown2;
    if (newMolWeight === 1) {
        weightSort.unshift(newMolWeight);
    } else if (newMolWeight > 1) {
        weightSort.push(newMolWeight);
        for (let i = 1; weightSort[weightSort.length - i] < weightSort[weightSort.length - (i + 1)]; i++) {
            let temp = weightSort[weightSort.length - i];
            weightSort[weightSort.length - i] = weightSort[weightSort.length - (i + 1)];
            weightSort[weightSort.length - (i + 1)] = temp;
            console.log(weightSort)
        }
    } else {
        
    }

} while (weightSort.length > 1)

console.log(weightSort)


