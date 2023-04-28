let display = document.querySelector('.numberDisplay');
let decimal = document.querySelector('.decimal');
let symbolButton = document.querySelectorAll('.operator');
let clear = document.querySelector('.clear');
let clearEntry = document.querySelector('.clearEntry');
let buttons = document.querySelectorAll('.operand');
let equals = document.querySelector('.equals');
let results = document.querySelector('.results');
let num1 = '', num2 = '', symbol = '', total = '';

display.textContent = '0'
// Display operands and assign value number variables

function printValue(e){
    if (display.textContent === '0') display.textContent = '';
    let buttonValue = e.target.value;
    display.textContent += buttonValue;
    if (symbol === ''){ num1 += buttonValue;}
    else if (symbol !== ''){ num2 += buttonValue; operate()};
};
for (let button of buttons){
    button.addEventListener('click', printValue)
};

// Display operator and assign value to symbol variable

function printSymbol(e){
    if (num1 !== '' && num2 !== ''){newOperate(); operate()};
    let symbolValue = e.target.value;
    display.textContent += symbolValue;
    symbol += symbolValue;
};
for (let button of symbolButton){
    button.addEventListener('click', printSymbol)
};

// Clear all

function clearAll(){
    display.textContent = '0';
    results.textContent = '';
    num1 = '';
    num2 = '';
    symbol = '';
    total = '';
};

clear.addEventListener('click', clearAll);

// Clear entry

function deleteRecentInput(){
    if (num1 === '0') return;
    let displayToDelete = display;
    let displayContent = displayToDelete.textContent;
    let displayResult = displayContent.slice(0, -1);

    if (num1 !== '' && symbol === '') {
        num1 = num1.slice(0, -1);

    } else if (num1 !== '' && symbol !== '' && num2 === ''){
        symbol = '';
    } else if (symbol !== '' && num2 !== ''){
        num2 = num2.slice(0, -1);
    } 

    displayToDelete.textContent = displayResult;
    if (displayResult === '') display.textContent = '0' ;
    operate();
};

clearEntry.addEventListener('click', deleteRecentInput);

// Block decimal button if there's already one

function blockDecimal(){
    if (num1 !== '' && symbol === '') {
        if (!num1.includes('.')) {
            num1 += '.'
            display.textContent += '.'
        }
    } else if (num2 !== ''){
        if (!num2.includes('.')) {
            num2 += '.'
            display.textContent += '.'
        }
    }
};

decimal.addEventListener('click', blockDecimal);

// Operation functions

function add(){
    return total = parseFloat(num1) + parseFloat(num2);
};

function substract(){
    return total = parseFloat(num1) - parseFloat(num2);
};

function multiply(){
    return total = parseFloat(num1) * parseFloat(num2);
};

function divide(){
    return total = parseFloat(num1) / parseFloat(num2);
};

// Check the symbol variable and execute the right operation for each one

function operate(){
    if (num1 === '' || num2 === '') return;
    switch (symbol){
        case '+':
            add()
            results.textContent = `= ${total}`;
            break;
        case '-':
            substract()
            results.textContent = `= ${total}`;
            break;
        case '*':
            multiply()
            results.textContent = `= ${total}`;
            break;    
        case '/':
            if (num1 === '0' || num2 === '0') return results.textContent = 'lmao go back to math class';
            divide()
            results.textContent = `= ${total}`;
            break;        
    }
};

function newOperate(){
    num1 = total;
    num2 = ''
    symbol = ''
    display.textContent = total;
};

equals.addEventListener('click', newOperate);