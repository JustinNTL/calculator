const currentOutputTextElement = document.querySelector('[data-current-output]');
const previousOutput = '';
const allClearButton = document.querySelector('[data-clear]');
const percentButton = document.querySelector('[data-percent]');
const backspaceButton = document.querySelector('[data-backspace]');
const negateButton = document.querySelector('[data-negate]');
const equalsButton = document.querySelector('[data-equals]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const operandButtons = document.querySelectorAll('[data-operand]');

class Calculator {
  constructor(previousOutput, currentOutputTextElement) {
    this.previousOutput = previousOutput;
    this.currentOutputTextElement = currentOutputTextElement;
    this.clear();
  }

  clear() {
    this.currentOutput = '';
    this.previousOutput = '';
    this.operator = undefined;
  }

  percent() {
    if (this.currentOutput === '') return;
    this.currentOutput = parseFloat(this.currentOutput) / 100;
  }

  backspace() {
    this.currentOutput = this.currentOutput.toString().slice(0, -1);
  }

  operatorChoice(operator) {
    if (this.currentOutput === '') return;
    if (this.previousOutput !== '') {
      this.compute();
    }
    this.operator = operator;
    this.previousOutput = this.currentOutput;
    this.currentOutput = '';
  }

  negate() {
    this.currentOutput = -(this.currentOutput);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOutput.toString().includes('.')) return;
    if (this.currentOutput === 'cannot divide by zero') {
      this.currentOutput = '';
    }
    if (typeof(this.currentOutput) === 'number') {
      this.currentOutput = '';
    }
    this.currentOutput = this.currentOutput.toString() + number.toString();
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOutput);
    const current = parseFloat(this.currentOutput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operator) {
      case '+':
        computation = prev + current;
        break;
      case '-':  
        computation = prev - current;
        break;
      case '×': 
        computation = prev * current;
        break;
      case '÷':
        if (current === 0) {
          computation = 'cannot divide by zero';
        } else {
          computation = prev / current;
        }
        break;
      default:
        return;
    }
    this.currentOutput = computation;
    this.operator = undefined;
    this.previousOutput = '';
  }

  updateDisplay() {
    this.currentOutputTextElement.innerText = this.currentOutput;
  }

}

const calculator = new Calculator(previousOutput, currentOutputTextElement);

operandButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
})

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.operatorChoice(button.innerText);
  })
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
  })

equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
})

negateButton.addEventListener('click', () => {
  calculator.negate();
  calculator.updateDisplay();
})

backspaceButton.addEventListener('click', () => {
  calculator.backspace();
  calculator.updateDisplay();
})

percentButton.addEventListener('click', () => {
  calculator.percent();
  calculator.updateDisplay();
})

// const generateDisplay = (e) => {
//   const key = document.querySelector(`button[data-key*="${e.keyCode}"]`);
//   if (!key) return;

//   let buttonValue = key.innerText;
//   display.innerText = buttonValue;
//   console.log(key);
// }

// window.addEventListener('keydown', generateDisplay);

// const buttons = document.querySelectorAll('buttons');
// buttons.forEach(button => button.addEventListener('click', generateDisplay));

// const setText = () => {
  
// }
// const buttons = document.querySelector('.buttons');

// buttons.addEventListener('click', generateDisplay);
// buttons.addEventListener('keydown', generateDisplay);