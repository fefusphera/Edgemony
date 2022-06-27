//TIMEOUT
//Stampiamo dopo 1,5,10 secondi l'orario corrente in questo formato
//"Ora" : "Minuti"
//possiamo scrivere 3 timeout diversi, oppure come bonus usiamo un array con i tempi [1,5,10].forEach

//Interval
// Fare il console.log analogo a quello mostrato su time.is
// dato un array [42, 23, 1, 7, 12, 99]
//estraiamo ogni secondo, come se fosse un tombola, un numero.
//Cancelliamo l'interval quando avremo pescato tutti i numeri possibili. tip:
//Contiamo quante volte abbiamo fatto parte l'intervallo

// DOM
// Prendiamo l'esercizo 1 di Interval e stampiamo la data nel body usando document.body.innerHTML = "...""

//---ESERCIZIO 1---
//Sintassi:
//let timerId = setTimeout(func|codice, [ritardo], [arg1], [arg2], ...)

//1000 un secondo
// 1) setTimeout(funzione,tempo di attesa) e clearTimeout()
// 2) setInterval() e clearInterval()

let today = new Date();
let dateOne = today.getHours() + ":" + today.getMinutes();
setTimeout(() => {
  console.log(dateOne);
}, 1000);

setTimeout(() => {
  console.log(dateOne);
}, 5000);

setTimeout(() => {
  console.log(dateOne);
}, 10000); //mi spunta dopo 5 secondi e non 10 ma ci pensiamo poi

//---ESERCIZIO 2---
console.clear();

let todayTwo = new Date();
let dateTwo =
  todayTwo.getHours() +
  ":" +
  todayTwo.getMinutes() +
  ":" +
  todayTwo.getSeconds(); //non funziona getseconds

const currentTime = () => {
  console.log(dateTwo);
};

const timerId = setInterval(currentTime, 10000);

console.log({ timerId });

clearInterval(timerId);

const timeoutId = setTimeout(() => {
  clearInterval(timerId);
}, 10_000);

//---ESERCIZIO 3---
// dato un array [42, 23, 1, 7, 12, 99]
//estraiamo ogni secondo, come se fosse un tombola, un numero.
//Cancelliamo l'interval quando avremo pescato tutti i numeri possibili. tip:
//Contiamo quante volte abbiamo fatto parte l'intervallo

console.clear();

const arrayOne = [42, 23, 1, 7, 12, 99];

// for (let index = 0; index < arrayOne.length; index++) {}
// setInterval(function () {
//   console.log(arrayOne(index), 1000);
// });

arrayOne.forEach((element, i) => {
  setInterval(function () {
    console.log(element);
  }, 1000);
});

//FUNZIONA MA NON RIESCO A FERMARLO

//con TimeOut mi funziona anche se mi ripete DUE volte il coso

//devo fare un for each array per ogni numero un setInterval ogni secondo,
//poi devo bloccare l'interval dopo 6 giri
//poi devo contare gli interval aspettandomi come risultato 6... credo. o 5.
