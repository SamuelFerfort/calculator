// Create arithmetic functions
// Change the input depending on the buttons you press
// Add an output button that decides what arithmetic function depending on input
const input = document.querySelector(".input");
const addButton = document.querySelector(".adding");
const buttons = document.querySelectorAll("button");
const result = document.querySelectorAll(".op");
const clearInput = document.querySelector(".clear");
const operators = ["+", "-", "÷", "x"];
// Change the input depending on button clicked
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      input.innerHTML === "0" ||
      input.innerHTML === "Error" ||
      input.innerHTML.includes(NaN)
    ) {
      if (!operators.includes(element.innerHTML) && element.innerHTML != "=") {
        // If the input is "0"  or NaN or Error and the clicked button is not an operator,
        // replace  with the clicked button's value
        input.innerHTML = element.innerHTML;
        return;
      }
    }

    if (input.innerHTML == "0" && operators.includes(element.innerHTML)) {
      // Otherwise, append the clicked button's value to the input
      input.innerHTML += element.innerHTML;
    } else if (element.innerHTML != "=") {
      
      input.innerHTML += element.innerHTML;
    }
  });
});

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

function calculateTest(e) {
  const expression = input.innerHTML;

  const { operator, count } = findOperator(expression);
  if (!operator) {
    return;
  }
  const output = expression.split(operator);

  const firstOperand = output[0];
  console.log(firstOperand);
  let secondOperand = output[1];
  console.log(secondOperand);

  let operatorTwo = e.target.innerHTML;
  if (count > 1) {
    secondOperand = output[1].split(operators);
    if (secondOperand == "" || firstOperand == "") {
      input.innerHTML = input.innerHTML.slice(0, -1);
      secondOperand == "";
      return;
    }
  }

  if (!secondOperand) {
    return;
  }

  console.log(`second: ${secondOperand}`);
  let calculation;
  switch (operator) {
    case "+":
      calculation = add(firstOperand, secondOperand);
      break;
    case "x":
      calculation = multiply(firstOperand, secondOperand);
      break;
    case "÷":
      calculation = divide(firstOperand, secondOperand);
      break;
    case "-":
      calculation = subtract(firstOperand, secondOperand);
      break;
  }

  if (count > 1) {
    input.innerHTML = calculation + operatorTwo;
  } else {
    input.innerHTML = calculation;
  }
}
// Calculate result and display output
result.forEach((element) => {
  element.addEventListener("click", (e) => calculateTest(e));
});

clearInput.addEventListener("click", () => (input.innerHTML = "0"));
