//task1
let landArea = 1000
let longBed = 15
let widthBed = 25
let netArea = landArea - (longBed*widthBed)
console.log("The net area of your land is " + netArea + " square meter")

//task2
let ellBig = 15 
let ellLittle = 6
let squeRing = ellBig - ellLittle
console.log("Square of the ring is equal " + squeRing + " dm2 or " + squeRing*100 + " sm2")

//task3
let number1 = 3656345654353
let number2 = 3454354953453
let number3 = 3456239654365
let result1 = (number1 < number2) ? number1 : number2
let result2 = (number2 < number3) ? number2 : number3
let smallNum = (result1 < result2) ? result1 : result2
console.log("Smalest number is " + smallNum)

//task4
let m = 8.5
let n = 11.45
let modulM = 10-m
let modulN = 10-n
let comparison
modulM = (modulM > 0) ? modulM : -modulM
modulN = (modulN > 0) ? modulN : -modulN
comparison = (modulM < modulN) ? m : n
console.log(comparison + " is closer to 10!")




//task5
//point1
let x1 = 0
let y1 = 0
let z1 = 0
//point2
let x2 = 543534534 
let y2 = 0
let z2 = 0
//point3
let x3 = 0
let y3 = 34552352352
let z3 = 0

//longA (between 1-3 triangle points)
let longA = (((x3-x1)**2)+((y3-y1)**2)+((z3-z1)**2))**0.5
//longB (between 1-2 triangle  points)
let longB = (((x2-x1)**2)+((y2-y1)**2)+((z2-z1)**2))**0.5
//longC (between 2-3 triangle  points)
let longC = (((x3-x2)**2)+((y3-y2)**2)+((z3-z2)**2))**0.5

//find the biggest side
let res1 = (longA > longB) ? longA : longB
let res2 = (longB > longC) ? longB : longC
let res3 = (res1 > res2) ? res1 : res2

//find the median long
let med1 = (res3 === longA) ? (((longB**2)+(longC**2))**0.5)/2 : 0
let med2 = (res3 === longB) ? (((longA**2)+(longC**2))**0.5)/2 : 0
let med3 = (res3 === longC) ? (((longA**2)+(longB**2))**0.5)/2 : 0

//output answer
let answer1 = (med1 === res3/2) ? console.log("it's a right triangle") : 
    ((med2 === res3/2) ? console.log("it's a right triangle") : 
        ((med3 === res3/2) ? console.log("it's a right triangle") : 
            console.log("it's NOT a right triangle")));