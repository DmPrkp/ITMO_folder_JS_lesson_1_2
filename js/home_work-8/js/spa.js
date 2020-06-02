let btnRay = document.getElementById("RayBtn");
let btnJoe = document.getElementById("JoeBtn");
let btnRoy = document.getElementById("RoyBtn");

let areaRay = document.getElementById("Ray");
let areaJoe = document.getElementById("Joe");
let areaRoy = document.getElementById("Roy");

btnJoe.onclick = () => {
    let activeBtn = document.querySelector(".activeBtn"); 
    (activeBtn === null) ? true: activeBtn.classList.remove("activeBtn");
    let activeArea = document.querySelector(".activeArea"); 
    (activeArea === null) ? true : activeArea.classList.remove("activeArea");   

    btnJoe.classList.add("activeBtn");
    areaJoe.classList.remove("none");
    areaJoe.classList.add("activeArea");
}

btnRay.onclick = () => {
    let activeBtn = document.querySelector(".activeBtn"); 
    (activeBtn === null) ? true: activeBtn.classList.remove("activeBtn");
    let activeArea = document.querySelector(".activeArea"); 
    (activeArea === null) ? true : activeArea.classList.remove("activeArea");    

    btnRay.classList.add("activeBtn");
    areaRay.classList.remove("none");
    areaRay.classList.add("activeArea");
}

btnRoy.onclick = () => {
    let activeBtn = document.querySelector(".activeBtn"); 
    (activeBtn === null) ? true: activeBtn.classList.remove("activeBtn");
    let activeArea = document.querySelector(".activeArea"); 
    (activeArea === null) ? true : activeArea.classList.remove("activeArea");    

    btnRoy.classList.add("activeBtn");
    areaRoy.classList.remove("none");
    areaRoy.classList.add("activeArea");
}