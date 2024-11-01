one = Number(document.getElementById("1"))
two = Number(document.getElementById("2"))
three = Number(document.getElementById("3"))
four = Number(document.getElementById("4"))
five = Number(document.getElementById("5"))
six = Number(document.getElementById("6"))
seven = Number(document.getElementById("7"))
eight = Number(document.getElementById("8"))
nine = Number(document.getElementById("9"))
equal = document.getElementById("equal")
minus = document.getElementById("minus")
plus = document.getElementById("plus")
divide = document.getElementById("divide")
multiply = document.getElementById("multiply")
zero = document.getElementById("zero")
result = document.getElementById('result')

const buttons = document.querySelector(".buttons");
const display = document.querySelector('#output-text');

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

buttons.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    if (!action) {
      if (displayedNum === '0' || shouldResetScreen) {
        resetScreen();
      }
      display.textContent += keyContent;
    }

    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      setOperation(action, keyContent);
    }

    if (action === 'clear') {
      resetCalculator();
    }

    if (action === 'calculate') {
      calculate();
    }
  }
});

function resetScreen() {
  display.textContent = '';
  shouldResetScreen = false;
}

function setOperation(operation, operator) {
  if (currentOperation !== null) calculate();
  firstOperand = display.textContent;
  currentOperation = operation;
  shouldResetScreen = true;
  display.textContent += ' ' + operator + ' ';
}

function resetCalculator() {
  display.textContent = '0';
  firstOperand = '';
  secondOperand = '';
  currentOperation = null;
}

function calculate() {
  if (currentOperation === null || shouldResetScreen) return;
  secondOperand = display.textContent.split(' ').pop();
  display.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  currentOperation = null;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return b !== 0 ? a / b : 'Error';
    default:
      return null;
  }
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}
