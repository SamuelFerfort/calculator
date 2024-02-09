// Create arithmetic functions
// Change the input depending on the buttons you press
// Add an output button that decides what arithmetic function depending on input
const input = document.querySelector(".input");
const addButton = document.querySelector(".adding");
const buttons = document.querySelectorAll("button");
const result = document.querySelector(".equal")
buttons.forEach((element) => {
    element.addEventListener("click", () => {
        input.innerHTML += element.innerHTML;
     })})
 

function add(a, b){
    parseInt(a);
    parseInt(b);
    return a + b;
}
result.addEventListener("click", () => {
    if (input.innerHTML.includes("+")) {
        output = input.innerHTML.split("+");
        input.innerHTML = add((output[0]), output[1]);
    }   
})