import { Calculator } from "./calculator";

const calculator = new Calculator();
const numberButtons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll("[value]");
const operatorButtons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".operator");
const clearButton: HTMLButtonElement | null =
  document.querySelector(".all-clear");
const deleteButton: HTMLButtonElement | null =
  document.querySelector(".delete");
const equalsButton: HTMLButtonElement | null =
  document.querySelector(".equal-sign");
const decimalButton: HTMLButtonElement | null =
  document.querySelector(".decimal");

if (numberButtons) {
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.appendNumber(button.value);
      calculator.updateDisplay();
    });
  });
}

if (operatorButtons) {
  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.chooseOperator(button.value);
      calculator.updateDisplay();
    });
  });
}

if (clearButton) {
  clearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
  });
}

if (deleteButton) {
  deleteButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
  });
}

if (equalsButton) {
  equalsButton.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
  });
}

if (decimalButton) {
  decimalButton.addEventListener("click", () => {
    if (calculator.currentOperand.includes(".")) return;
    calculator.appendNumber(decimalButton.value);
    calculator.updateDisplay();
  });
}
