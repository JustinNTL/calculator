class Calculator {
  constructor() {

  }

  clear() {

  }

  percent(number) {

  }

  backspace() {

  }

  operation(operator) {

  }

  negate(number) {

  }

  appendNumber(number) {

  }

  compute() {

  }

  updateDisplay() {

  }

}

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