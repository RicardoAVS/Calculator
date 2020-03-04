const inputBox = document.getElementById('inputBox');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const siete = document.getElementById('siete');
const ocho = document.getElementById('ocho');
const nueve = document.getElementById('nueve');
const cero = document.getElementById('cero');
const sum = document.getElementById('sum');
const minus = document.getElementById('minus');
const igual = document.getElementById('igual');
let acc = '';
let curr = '';
let input = (inputBox.value = 0);
let suma = false;
let menos = false;

// modicar la caja del input al hacer click
uno.addEventListener('click', (e) => {
  // Si es 0 agregar a la pantalla el numero
  if (input === 0 && acc === '') {
    inputBox.value = 1;
    acc += inputBox.value;
    input = acc;
  } else if (acc !== '' && suma === false && menos === false) {
    acc += 1;
    inputBox.value = acc;
  } else if (suma === true) {
    curr += 1;
    inputBox.value = curr;
  } else if (menos === true) {
    curr += 1;
    inputBox.value = curr;
  }
});

dos.addEventListener('click', (e) => {
  if (input === 0 && acc === '') {
    inputBox.value = 2;
    acc += inputBox.value;
    input = acc;
  } else if (acc !== '' && suma === false && menos === false) {
    acc += 2;
    inputBox.value = acc;
  } else if (suma === true) {
    curr += 2;
    inputBox.value = curr;
  } else if (menos === true) {
    curr += 3;
    inputBox.value = curr;
  }
});

tres.addEventListener('click', (e) => {
  if (input === 0 && acc === '') {
    inputBox.value = 3;
    acc += inputBox.value;
    input = acc;
  } else if (acc !== '' && suma === false && menos === false) {
    acc += 3;
    inputBox.value = acc;
  } else if (suma === true) {
    curr += 3;
    inputBox.value = curr;
  } else if (menos === true) {
    curr += 3;
    inputBox.value = curr;
  }
});

cuatro.addEventListener('click', (e) => {
  if (input === 0 && acc === '') {
    inputBox.value = 4;
    acc += inputBox.value;
    input = acc;
  } else if (acc !== '' && suma === false && menos === false) {
    acc += 4;
    inputBox.value = acc;
  } else if (suma === true) {
    curr += 4;
    inputBox.value = curr;
  } else if (menos === true) {
    curr += 4;
    inputBox.value = curr;
  }
});

cinco.addEventListener('click', (e) => {
  if (input === 0 && acc === '') {
    inputBox.value = 5;
    acc += inputBox.value;
    input = acc;
  } else if (acc !== '' && suma === false && menos === false) {
    acc += 5;
    inputBox.value = acc;
  } else if (suma === true) {
    curr += 5;
    inputBox.value = curr;
  } else if (menos === true) {
    curr += 5;
    inputBox.value = curr;
  }
});

seis.addEventListener('click', (e) => {
  if (input === 0 && acc === '') {
    inputBox.value = 6;
    acc += inputBox.value;
    input = acc;
  } else if (acc !== '' && suma === false && menos === false) {
    acc += 6;
    inputBox.value = acc;
  } else if (suma === true) {
    curr += 6;
    inputBox.value = curr;
  } else if (menos === true) {
    curr += 6;
    inputBox.value = curr;
  }
});

siete.addEventListener('click', (e) => {
  if (input === 0 && acc === '') {
    inputBox.value = 7;
    acc += inputBox.value;
    input = acc;
  } else if (acc !== '' && suma === false && menos === false) {
    acc += 7;
    inputBox.value = acc;
  } else if (suma === true) {
    curr += 7;
    inputBox.value = curr;
  } else if (menos === true) {
    curr += 7;
    inputBox.value = curr;
  }
});

ocho.addEventListener('click', (e) => {
  if (input === 0 && acc === '') {
    inputBox.value = 8;
    acc += inputBox.value;
    input = acc;
  } else if (acc !== '' && suma === false && menos === false) {
    acc += 8;
    inputBox.value = acc;
  } else if (suma === true) {
    curr += 8;
    inputBox.value = curr;
  } else if (menos === true) {
    curr += 8;
    inputBox.value = curr;
  }
});

nueve.addEventListener('click', (e) => {
  if (input === 0 && acc === '') {
    inputBox.value = 9;
    acc += inputBox.value;
    input = acc;
  } else if (acc !== '' && suma === false && menos === false) {
    acc += 9;
    inputBox.value = acc;
  } else if (suma === true) {
    curr += 9;
    inputBox.value = curr;
  } else if (menos === true) {
    curr += 9;
    inputBox.value = curr;
  }
});

cero.addEventListener('click', (e) => {
  if (input === 0 && acc === '') {
    inputBox.value = 0;
    acc += inputBox.value;
    input = acc;
  } else if (acc !== '' && suma === false && menos === false) {
    acc += 0;
    inputBox.value = acc;
  } else if (suma === true) {
    curr += 0;
    inputBox.value = curr;
  } else if (menos === true) {
    curr += 0;
    inputBox.value = curr;
  }
});

// Borrar lo que estaba en pantalla y agregar el valor acumulado a una variable
sum.addEventListener('click', (e) => {
  inputBox.value = 0;
  suma = true;
});

minus.addEventListener('click', (e) => {
  inputBox.value = 0;
  menos = true;
});

igual.addEventListener('click', (e) => {
  if (suma === true) {
    inputBox.value = parseFloat(acc) + parseFloat(curr);
  } else if (menos === true) {
    inputBox.value = parseFloat(acc) - parseFloat(curr);
  }
});

// TODO
inputBox.addEventListener('keypress', (e) => {
  console.log(e);
});
