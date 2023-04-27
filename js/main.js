let display = document.querySelector('.numberDisplay');
let symbolButton = document.querySelectorAll('.operator');
let buttons = document.querySelectorAll('.operand');
let equals = document.querySelector('.equals');
let results = document.querySelector('.results');
let num1 = '', num2 = '', symbol = '', total = '';

// Display operands and assign value number variables

function printValue(e){
    let buttonValue = e.target.value;
    display.textContent += buttonValue;
    if (symbol === ''){ num1 += buttonValue;}
    else if (symbol !== ''){ num2 += buttonValue;};
};
for (let button of buttons){
    button.addEventListener('click', printValue)
}

// Display operator and assign value to symbol variable

function printSymbol(e){
    if (num1 !== '' && num2 !== '') operate();
    let symbolValue = e.target.value;
    display.textContent += symbolValue;
    symbol += symbolValue;
};
for (let button of symbolButton){
    button.addEventListener('click', printSymbol)
}

// Operation functions

function add(){
    return total = parseInt(num1) + parseInt(num2);
};

function substract(){
    return total = parseInt(num1) - parseInt(num2);
};

function multiply(){
    return total = parseInt(num1) * parseInt(num2);
};

function divide(){
    return total = parseInt(num1) / parseInt(num2);
};

// Check the symbol variable and execute the right operation for each one

function operate(){
    if (num1 === '' || num2 === '') return;
    switch (symbol){
        case '+':
            add()
            num1 = total;
            num2 = ''
            symbol = ''
            results.textContent = total;
            break;
        case '-':
            substract()
            num1 = total;
            num2 = ''
            symbol = ''
            results.textContent = total;
            break;
        case '*':
            multiply()
            num1 = total;
            num2 = ''
            symbol = ''
            results.textContent = total;
            break;    
        case '/':
            if (num1 === '0' || num2 === '0') return results.textContent = 'lmao go back to math class';
            divide()
            num1 = total;
            num2 = ''
            symbol = ''
            results.textContent = total;
            break;        
    }
}

equals.addEventListener('click', operate);