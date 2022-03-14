const currentOutputTextElement = document.querySelector('[data-current-output]');
const allClearButton = document.querySelector('[data-clear]');
const percentButton = document.querySelector('[data-percent]');
const backspaceButton = document.querySelector('[data-backspace]');
const negateButton = document.querySelector('[data-negate]');
const equalsButton = document.querySelector('[data-equals]');
// const availableKeys = document.querySelector(`button[data-key*="${e.keyCode}"]`);
const operatorButtons = document.querySelectorAll('[data-operator]');
const operandButtons = document.querySelectorAll('[data-operand]');

class Calculator {
  constructor(currentOutputTextElement) {
    this.currentOutputTextElement = currentOutputTextElement;
    this.clear();
  }

  clear() {
    this.currentOutput = '';
    this.operation = undefined;
  }

  percent() {

  }

  backspace() {

  }

  operatorChoice(operator) {

  }

  negate() {

  }

  appendNumber(number) {
    this.currentOutput = this.currentOutput.toString() + number.toString();
  }

  compute() {

  }

  updateDisplay() {
    this.currentOutputTextElement.innerText = this.currentOutput;
  }

}

const calculator = new Calculator(currentOutputTextElement);

operandButtons.forEach(button => {
  button.addEventListener('click',  () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
})

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (operator, num1, num2) => {
  // if operator = a/s/m/d call function, probably pop a reduction method to 
  // receive infinite number of digits
  switch (operator) {
    case add:
      return add(num1, num2);
      break;
    case subtract:  
      return subtract(num1, num2);
      break;
    case multiply: 
      return multiply(num1, num2);
      break;
    case divide:
      return divide(num1, num2);
      break;
  }
};

const display = document.querySelector('.outputDisplay');

const generateDisplay = (e) => {
  const key = document.querySelector(`button[data-key*="${e.keyCode}"]`);
  if (!key) return;

  let buttonValue = key.innerText;
  display.innerText = buttonValue;
  console.log(key);
}

const buttons = document.querySelectorAll('buttons');
buttons.forEach(button => button.addEventListener('click', generateDisplay));
window.addEventListener('keydown', generateDisplay);

// const setText = () => {
  
// }
// const buttons = document.querySelector('.buttons');

// buttons.addEventListener('click', generateDisplay);
// buttons.addEventListener('keydown', generateDisplay);