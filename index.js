const btnOne = document.getElementById('calc-one');
const Two = document.getElementById('calc-two');
const btnThree = document.getElementById('calc-three');
const btnFour = document.getElementById('calc-four');
const btnFive = document.getElementById('calc-five');
const btnSix = document.getElementById('calc-six');
const btnSeven = document.getElementById('calc-seven');
const btnEigth = document.getElementById('calc-eigth');
const btnNine = document.getElementById('calc-nine');
const btnCero = document.getElementById('calc-zero');

const btnReset = document.getElementById('calc-clear');
const btnDecimal = document.getElementById('calc-decimal');
const btnBackSpace = document.getElementById('calc-backspace');
const calcDisplay = document.getElementById('calc-display-val');

// Create varialbes for each operator button
const btnOperator = document.getElementsByClassName('calc-btn-operator');

// Create variables for each number button
const calcBtnNum = document.getElementsByClassName('calc-btn-num');

let displayVal = '0';
let previousVal;
let evalNums = [];

// Reset display
const delDisplay = () => {
  displayVal = '0';
  previousVal = undefined;
  evalNums = [];
  calcDisplay.innerText = displayVal;
};

const updateDisplay = (clickObj) => {
  let btnText = clickObj.target.innerText;
  if (displayVal === '0') displayVal = '';

  displayVal += btnText;
  calcDisplay.innerText = displayVal;
};

// perform aritmetics
const performOperation = (clickObj) => {
  const operator = clickObj.srcElement.id;
  switch (operator) {
    case 'calc-addition':
      {
        evalNums.push(calcDisplay.innerText);
        evalNums.push('+');
        previousVal = calcDisplay.innerText;
        displayVal = '';
        calcDisplay.innerText = '0';
      }
      break;

    case 'calc-minus':
      {
        evalNums.push(calcDisplay.innerText);
        evalNums.push('-');
        previousVal = calcDisplay.innerText;
        displayVal = '';
        calcDisplay.innerText = '0';
      }
      break;

    case 'calc-divide':
      {
        evalNums.push(calcDisplay.innerText);
        evalNums.push('/');
        previousVal = calcDisplay.innerText;
        displayVal = '';
        calcDisplay.innerText = '0';
      }
      break;

    case 'calc-multiply':
      {
        evalNums.push(calcDisplay.innerText);
        evalNums.push('*');
        previousVal = calcDisplay.innerText;
        displayVal = '';
        calcDisplay.innerText = '0';
      }
      break;

    case 'calc-equals':
      {
        evalNums.push(displayVal);
        let result = eval(evalNums.join(' '));
        displayVal += result + '';
        calcDisplay.innerText = result;
        evalNums = [];
        displayVal = '0';
        previousVal = undefined;
        console.log(previousVal);
      }
      break;

    default:
      break;
  }
};

// loop through each calculator num and add click event
for (let i = 0; i < calcBtnNum.length; i++) {
  calcBtnNum[i].addEventListener('click', updateDisplay, false);
}

// iterate through each operator button and add click event
for (let i = 0; i < btnOperator.length; i++) {
  btnOperator[i].addEventListener('click', performOperation, false);
}

// Reset the display and stored values
btnReset.addEventListener('click', delDisplay);

// remove last number of the array AKA(Display)
btnBackSpace.addEventListener('click', () => {
  let currDisplayNum = displayVal.slice(0, -1);
  displayVal = currDisplayNum;
  calcDisplay.innerText = displayVal;

  if (displayVal === '') displayVal = '0';

  calcDisplay.innerText = displayVal;
});

// Add decimal notation to current number
btnDecimal.addEventListener('click', () => {
  if (!displayVal.includes('.')) {
    displayVal += '.';
    calcDisplay.innerText = displayVal;
  }

  calcDisplay.innerText = displayVal;
});
