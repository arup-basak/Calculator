const buttonData = document.querySelectorAll(".button");
const display = document.querySelector(".display");

const operators = ["+", "-", "*", "/", "%", "."];

// display.contentEditable = true

let equation = "";
let output = ""

function reloadEquation() {
  display.innerText = equation;
}

function addValue(value) {
    equation += value;
    reloadEquation()
}

function solve() {
    output = nerdamer.solve(`${equation}=x`, "x").toString();
    equation = ""
    display.innerText = output.substring(1, output.length -1); 
}

function removeLast() {
  if (equation.length > 0)
        equation = equation.substring(0, equation.length - 1);
    reloadEquation()
}

buttonData.forEach((element) => {
  element.onclick = function () {
    if (element.innerText != "=") {
        if (
            operators.includes(element.innerText) &&
            operators.includes(equation[equation.length - 1])
        ) {
            removeLast();
        }
      addValue(element.innerText);
    } else solve();
  };
});
