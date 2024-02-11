// Create arithmetic functions
// Change the input depending on the buttons you press
// Add an output button that decides what arithmetic function depending on input
const input = document.querySelector(".input");
const addButton = document.querySelector(".adding");
const buttons = document.querySelectorAll("button");
const result = document.querySelectorAll(".equal");
const clearInput = document.querySelector(".clear");
const operators = ['+', '-', '÷', 'x'];
// Change the input depending on button clicked
buttons.forEach((element) => {
    element.addEventListener("click", () => {
        input.innerHTML += element.innerHTML;
        
    });      
     })

// Operations
const add = (a, b) => parseFloat(a) + parseFloat(b);
const subtract = (a, b) => parseFloat(a) - parseFloat(b);
const divide = (a, b) => parseFloat(a) / parseFloat(b);
const multiply = (a, b) => parseFloat(a) * parseFloat(b);
 
function findOperator(inputString) {
    let operatorCount = 0;
    let foundOperator = null;
    for (let i = 0; i < inputString.length; i++) {
        if (operators.includes(inputString[i])) {
            operatorCount++;
            if (!foundOperator) {
                foundOperator = inputString[i];
            }
        }
    }
    return { operator: foundOperator, count: operatorCount };
}


function calculateTest () {
    const expression = input.innerHTML;
    const { operator, count } = findOperator(expression);
    
    const output = expression.split(operator);
    console.table(output);
    const firstOperand = output[0];
    console.log(firstOperand)
    let secondOperand = output[1];
    console.log(secondOperand)
    if (count > 1) {     
        
        secondOperand = output[1].split(operators)
        
    }else {
        secondOperand = output[1]
    }
    console.log(secondOperand)
    if (!secondOperand) {
        return;
    }
    if (!operator) {
        input.innerHTML = "no operator!";
    }
    let calculation;
    switch (operator) {
        case '+':
            calculation = add(firstOperand, secondOperand);       
    }
    if (count > 1){
    input.innerHTML = calculation;
    } else {
        input.innerHTML = calculation;
    }    
}
// Calculate result and display output
result.forEach((element) => element.addEventListener("click", calculateTest));        
clearInput.addEventListener("click", () => input.innerHTML = "");