export class Calculator {
  currentOperand: string;
  previousOperand: string;
  operator: string;
  history: Array<{ value: string; type: "number" | "operator" }>;

  constructor() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operator = "";
    this.history = [];
  }

  clear(): void {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operator = "";
    this.history = [];
  }

  delete(): void {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  appendNumber(number: string): void {
    this.currentOperand += number;
    this.history.push({ value: number, type: "number" });
  }

  chooseOperator(operator: string): void {
    if (this.currentOperand === "") return;
    this.history.push({ value: operator, type: "operator" });
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operator = operator;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute(): void {
    let computation: number;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operator) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation.toString();
    this.operator = "";
    this.previousOperand = "";
    this.history.push({ value: this.currentOperand, type: "number" });
  }

  updateDisplay(): void {
    const currentOperandText = document.querySelector(
      ".calculator-screen"
    ) as HTMLInputElement;
    if (currentOperandText) {
      currentOperandText.value = this.currentOperand;
    }
  }
}
