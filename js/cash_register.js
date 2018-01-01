console.log("helloWorld");

var defaultDisplay = '';

var displaySpace = document.getElementById("displaySpace");

var calculatorMod = calculator();

var num1 = 0;

var num2 = 0;

var operation = null;

var numButtonClick = document.getElementsByClassName("numButton");
for (var i = 0; i<numButtonClick.length; i++){
    numButtonClick[i].addEventListener("click", function(){
        display(this.value)
    },true)
}

var addButtonClick = document.getElementById("add");
addButtonClick.addEventListener("click", function(){
    num1 = parseFloat(displaySpace.innerHTML);
    operation = "+"
    calculatorMod.load(num1)
    freshDisplay();
},true)

var subtractButtonClick = document.getElementById("subtract");
subtractButtonClick.addEventListener("click", function(){
    num1 = parseFloat(displaySpace.innerHTML);
    operation = "-"
    calculatorMod.load(num1)
    freshDisplay();
},true)

var multiplyButtonClick = document.getElementById("multiply");
multiplyButtonClick.addEventListener("click", function(){
    num1 = parseFloat(displaySpace.innerHTML);
    operation = "*"
    calculatorMod.load(num1)
    freshDisplay();
},true)

var divideButtonClick = document.getElementById("divide");
divideButtonClick.addEventListener("click", function(){
    num1 = parseFloat(displaySpace.innerHTML);
    operation = "/"
    calculatorMod.load(num1)
    freshDisplay();
},true)

var equalsButtonClick = document.getElementById("equal");
equalsButtonClick.addEventListener("click", function(){
    num2 = parseFloat(displaySpace.innerHTML);
    if (operation === "+"){
        calculatorMod.add(num2);
        displaySpace.innerHTML = calculatorMod.getTotal();
    }else if (operation === "-"){
        calculatorMod.subtract(num2);
        displaySpace.innerHTML = calculatorMod.getTotal();
    }else if (operation === "*"){
        calculatorMod.multiply(num2);
        displaySpace.innerHTML = calculatorMod.getTotal();
    }else if (operation === "/"){
        calculatorMod.divide(num2);
        displaySpace.innerHTML = calculatorMod.getTotal();
    }
},true)



function display(n){
    var numberDisplay = document.getElementById("displaySpace")
    numberDisplay.innerHTML += n
}

function freshDisplay(){
    var fDisplay = document.getElementById("displaySpace");
    fDisplay.innerHTML = defaultDisplay
}

function clear(){
    calculatorMod.clearMemory();
    var clearDisplay = document.getElementById("displaySpace")
    clearDisplay.innerHTML = defaultDisplay
}

var clearButtonClick = document.getElementById("clear")
clearButtonClick.addEventListener("click", function(){
    operation = null,
    num1 = null,
    num2 = null,
    freshDisplay();
},true)

var balanceButtonClick = document.getElementById("getBalance");
balanceButtonClick.addEventListener("click", function(){
    displaySpace.innerHTML = calculatorMod.recallMemory();
},true)


var depositButtonClick = document.getElementById("depositCash");
depositButtonClick.addEventListener("click", function(){
    calculatorMod.saveMemory(parseFloat(displaySpace.innerHTML));
    freshDisplay();
},true)

var withdrawButtonClick = document.getElementById("withdraw");
withdrawButtonClick.addEventListener("click", function(){
    calculatorMod.addMemory(parseFloat(displaySpace.innerHTMl));
    freshDisplay();
},true)
    
