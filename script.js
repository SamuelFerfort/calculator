// Create arithmetic functions
// Change the input depending on the buttons you press
// Add an output button that decides what arithmetic function depending on input
const input = document.querySelector(".input");
const addButton = document.querySelector(".adding");
const buttons = document.querySelectorAll("button");
const result = document.querySelector(".equal");
const clearInput = document.querySelector(".clear");
// Change the input depending on button clicked
buttons.forEach((element) => {
    element.addEventListener("click", () => {
        input.innerText = input.innerText == "Output"
        ? element.innerText : input.innerText + element.innerText;
    });      
     })
 
// Operations
const add = (a, b) => (parseFloat(a) + parseFloat(b)).toFixed(2);
const subtract = (a, b) => (parseFloat(a) - parseFloat(b)).toFixed(2);
const divide = (a, b) => (parseFloat(a) / parseFloat(b)).toFixed(2);
const multiply = (a, b) => (parseFloat(a) * parseFloat(b)).toFixed(2);
    

// Calculate result and display output
result.addEventListener("click", () => {
    if (input.innerHTML.includes("+")) {
        const output = input.innerHTML.split("+");
        input.innerHTML = add((output[0]), output[1]);
    }else if (input.innerHTML.includes("-")) {
        const output = input.innerHTML.split("-");
        input.innerHTML = subtract((output[0]), output[1]);
    }else if (input.innerHTML.includes("÷")) {
        const output = input.innerHTML.split("÷");
        input.innerHTML = divide((output[0]), output[1]);
    }else if  (input.innerHTML.includes("x")) {
        const output = input.innerHTML.split("x");
        input.innerHTML = multiply((output[0]), output[1]);
    }           
})

clearInput.addEventListener("click", () => input.innerHTML = "Output");