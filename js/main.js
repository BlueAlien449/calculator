let display = document.querySelector('.numberDisplay');
let symbolButton = document.querySelectorAll('.operator');
let buttons = document.querySelectorAll('.operand');
let num1 = '', num2 = '', symbol = '', total = '';

// Display operands and assign value number variables

function printValue(e){
    let buttonValue = e.target.value;
    display.textContent += buttonValue;
    if (symbol === ''){ num1 += buttonValue; console.log(num1)}
    else if (symbol !== ''){ num2 += buttonValue; console.log(num2)};
};
for (let button of buttons){
    button.addEventListener('click', printValue)
}

// Display operator and assign value to symbol variable

function printSymbol(e){
    let symbolValue = e.target.value;
    display.textContent += symbolValue;
    symbol += symbolValue;
};
for (let button of symbolButton){
    button.addEventListener('click', printSymbol)
}

function add(){
    return num1 + num2;
};

function substract(){
    return num1 - num2
};

function multiply(){
    return num1 * num2;
};

function divide(){
    return num1 / num2;
};