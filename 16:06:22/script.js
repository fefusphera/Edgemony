//non capisce che sono numeri e non esegue le operazioni
//parseInt(‘stringa’);
//parseFloat(‘stringa’);

const num1 = prompt("Inserisci il primo numero:");
const parsednum1 = parseInt(num1);
const num2 = prompt("Inserisci il secondo numero:");
const parsednum2 = parseInt(num2);
const operationChoice = prompt("Inserisci l'operazione (+,-,*,/)");

//funzioni

function somma(num1, num2) {
  return num1 + num2;
}

function sottrazione(num1, num2) {
  return num1 - num2;
}

function moltiplicazione(num1, num2) {
  return num1 * num2;
}

function divisione(num1, num2) {
  return num1 / num2;
}

//evocazione

// if (operationChoice == "+") {
//   result = parsednum1 + parsednum2;
// }
// if (operationChoice == "-") {
//   result = parsednum1 - parsednum2;
// }
// if (operationChoice == "*") {
//   result = parsednum1 * parsednum2;
// }
// if (operationChoice == "/") {
//   result = parsednum1 / parsednum2;
// }

//---^ NO ^ -perchè sto dicendo io alla funzione cosa deve fare

if (operationChoice == "+") {
  result = somma(parsednum1, parsednum2);
}

if (operationChoice == "-") {
  result = sottrazione(parsednum1, parsednum2);
}

if (operationChoice == "*") {
  result = moltiplicazione(parsednum1, parsednum2);
}

if (operationChoice == "/") {
  result = divisione(parsednum1, parsednum2);
}

console.log(result);

// modifiche apportate
