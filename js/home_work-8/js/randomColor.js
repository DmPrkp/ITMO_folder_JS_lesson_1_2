//Task1
colorTask1.addEventListener('click', changeColorToRandom)

function changeColorToRandom() {
    let colorMathV1 = Math.floor(Math.random() * 255);
    let colorMathV2 = Math.floor(Math.random() * 255);
    let colorMathV3 = Math.floor(Math.random() * 255);
    this.style.backgroundColor = `rgb(${colorMathV1},${colorMathV2},${colorMathV3})`
}

colorTask1.addEventListener('mousedown', function () {
    this.classList.remove("shadow")
})
colorTask1.addEventListener('mouseup', function () {
    this.classList.add("shadow")
})



//Task2
colorTask1.addEventListener('click', ctnPlus)
let cnt = 0;

function ctnPlus() {
    let num = document.getElementById("cntTask2")
    num.innerHTML = "";
    num.innerHTML = ++cnt;
}



//Task3
let inputVal = document.getElementById("inputTxt");
let btnSend = document.getElementById("colorBtn");
let textUpl = document.getElementById("text-upl");
let result;

// объект с потьзователем
let arrText = {
        imgUser: "img/m7.jpg",
        name: "Test",
        message: [],
    }

let cnt3 = 0;

//сборка сообщения
let upToTextArea = function (arr) {    
    for (cnt3 ; cnt3 < arr.message.length; cnt3++) {
        let div = document.createElement('div');
        div.style.display = "flex";
        textUpl.appendChild(div);
        let divContent = document.createElement('div')
        let divImg = document.createElement('div')
        div.appendChild(divImg);
        div.appendChild(divContent);
        div.style.display = "flex";

        let img = document.createElement("img");
        img.setAttribute("src", arr.imgUser);
        img.style.width = "auto";
        img.style.height = "70px";
        divImg.appendChild(img);

        let h3 = document.createElement("h3");
        h3.innerText = arr.name;
        divContent.appendChild(h3);

        let pText = document.createElement("p");
        pText.innerText = arr.message[cnt3][1];
        divContent.appendChild(pText);

        let pMassage = document.createElement("p");
        pMassage.innerText = arr.message[cnt3][0].toLocaleString();
        divContent.appendChild(pMassage);
    }
}

//добаление текущей даты и коммента в объект с пользователем arrText
colorBtn.onclick = function getVal() {   
    let result = [(new Date()), ""+inputVal.value]
    arrText.message.push(result);
    upToTextArea(arrText);
};

colorBtn.addEventListener('mousedown', function () {
    this.classList.remove("shadow")
})
colorBtn.addEventListener('mouseup', function () {
    this.classList.add("shadow")
})