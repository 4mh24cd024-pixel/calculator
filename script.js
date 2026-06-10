let firstNum = ""
let operator = ""
let secondNum=""
const screen = document.querySelector(".screen");
const d1 = document.querySelector(".d1")
const d2 = document.querySelector(".d2")

const nums = document.querySelectorAll(".num");
nums.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(operator==="")
        {
           d1.textContent += btn.textContent;
           firstNum = d1.textContent;
        }
        else{
            firstNum = String(Number(firstNum)+Number(secondNum))
            secondNum += btn.textContent
            d1.textContent = firstNum + operator + secondNum
        }
    })
})

const acBtn = document.querySelector("#ac");
acBtn.addEventListener("click",function(){
    firstNum = ""
    operator = ""
    secondNum = ""
    d1.textContent = "";
    d2.textContent = "";
})

const bcBtn = document.querySelector("#bc")
bcBtn.addEventListener("click",function(){
    d1.textContent = d1.textContent.slice(0,-1)//start with 0 then cut the number at index of -1
})

const ops = document.querySelectorAll(".op")
ops.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        operator = btn.textContent
        d1.textContent = firstNum + operator + secondNum
    })
})

const eqBtn = document.querySelector(".eq")
eqBtn.addEventListener("click",()=>{
    
    switch(operator)
    {
        case "+":
            d2.textContent = Number(firstNum) + Number(secondNum)
            break;
        case "−":
            d2.textContent = Number(firstNum) - Number(secondNum)
            break;
        case "×":
            d2.textContent = Number(firstNum) * Number(secondNum)
            break;
        case "÷":
            d2.textContent = Number(firstNum) / Number(secondNum)
            break;
        case "%":
            d2.textContent = Number(firstNum)%Number(secondNum)
    }
})

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker Registered"));
}