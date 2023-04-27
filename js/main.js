let display = document.querySelector('.numberDisplay');
let symbolButton = document.querySelectorAll('.operator');
let clear = document.querySelector('.clear');
let clearEntry = document.querySelector('.clearEntry');
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

// Clear all

function clearAll(){
    num1 = '';
    num2 = '';
    total = ''
    display.textContent = '';
    results.textContent = '';
}

clear.addEventListener('click', clearAll);

// Clear entry

function deleteRecentInput(){

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
}

clearEntry.addEventListener('click', deleteRecentInput);

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