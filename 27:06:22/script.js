//---ESERCIZIO

//Sulla base dell'esercitazione del giorno, creare una pagina che mostri una navbar.
//Questa deve visualizzare:

// Un nome utente, preso da prompt salvi sul localStorage
// Lo stesso nome sarà visualizzato all'interno di questa navbar come testo
// Gli elementi HTML utilizzati dovranno essere dichiarati via JavaScript

// Bisogna fare un controllo (try) sul nome utente stesso,
//se non presente nel localStorage allora mostri un errore in console,
//e successivamente aggiunto (catch)

//-----------------------------

const newEl = (el) => document.createElement(el);

const navEl = newEl("nav");
const titleEl = newEl("h3");

const person = prompt("Ciao! Inserisci il tuo nome utente");

const body = document.querySelector("body");
body.append(navEl);
navEl.append(titleEl);

titleEl.innerText = "ciao" + " " + person;

localStorage.setItem("username", person);

try {
  if (username.lenght === 0) {
  }
} catch (error) {
  console.error("Non hai inserito il Nome!");
}

// } else {

//   throw new Error('suca')
// }

// const nomeEl = newEl("h3");
// // nomeEl.className = "username1";
// // nomeEl.textContent = "nome";

// let person = prompt("Please enter your name", "Harry Potter");

// const createNav = () => {
//     const navEl = newEl('div');
//     const titleEl = newEl('h3');

//     navEl.className = "wrapper"
//     titleEl.className = "title"

//     titleEl.textContent = title

//     navEl.append(titleEl);
//     parent.appendChild(navEl);
//   }

//   const userLogIn = prompt('Ciao! Inserisci il tuo nome utente');

// getMyuser() {
//     const name = prompt('What is your name?');
//     alert(`Hello ${name}, nice to see you!`);
//     document.querySelector('h3') = `Ciao ${name}`;
//     }

//-----------------
// const newEl = (el) => document.createElement(el);

// const titleEl = newEl("h3");

// let person = prompt("Please enter your name");

// console.log(person);

// function saluta() {
//   titleEl = `Ciao ${person}`;
// }

// const divEl = newEl("div");
// const navEl = newEl("nav");
// const titleEl = newEl("p");

// divEl.className = "navbar1";
// titleEl.teextcontent = "nome utente";

// const userLogIn = prompt("Inserisci nome");

//-------------

// const newEl = (el) => document.createElement(el);
// const provaEl = newEl("h3");

// const body = document.querySelector("body");

// window.onload = function () {
//   const nome = prompt("What is your name?");
//   const prova = document.querySelector("h3");
//   prova.innerHTML = `Ciao ${nome}`;
// };

// // prova.className = "nome1";

// prova.append();
// parent.appendChild(prova);
