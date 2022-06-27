// una funzione che accetta due parametri e torna la somma di entrambi
//versione migliorata dove controlla l'esistenza dei due parametri e che siano numeri
// se non c'è un numero messaggio di errore che spiega cosa non va
//sottrazione, moltiplicazione e divisione (dove spunta errore se prova a dividere per 0)

//funzione che accetta 2 parametri e ritorna la somma

/* ====== Declare function ===== */

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

/* ============ */

//errore se si prova a dividere per 0

function getCalculationResult(num1, num2) {
  if (num2 === 0) {
    console.error("non si può dividere per 0!");
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    console.error("non va bene");
    return;
  }

  if (!num1) {
    console.log("non esiste");
    return;
  }

  console.log(somma(num1, num2));
  console.log(sottrazione(num1, num2));
  console.log(moltiplicazione(num1, num2));
  console.log(divisione(num1, num2));
}

getCalculationResult(10, 5);
getCalculationResult(5, 6);
