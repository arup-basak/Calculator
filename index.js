const buttonData = document.querySelectorAll(".button");
const display = document.querySelector(".display");

const operators = ["+", "-", "×", "÷", "%", "."];
const acceptedKeys = ["+", "-", "*", "/", "%", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "="];

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
    const finalEQ = equation.replace("×", "*").replace("÷", "/");
    output = nerdamer.solve(`${finalEQ}=x`, "x").toString();
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
        if (element.innerText == "backspace") {
            removeLast()
        } else if (element.innerText != "=") {
            if (operators.includes(element.innerText)) {
                if (equation.length == 0) {
                    return;
                } 
                else if(operators.includes(equation[equation.length - 1])) {
                    removeLast();
                }
          }
          addValue(element.innerText);
        } else solve();
  };
});