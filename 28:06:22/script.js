import { newEl, createCard, q } from "./utils.js";

const navEl = newEl("nav");
const titleEl1 = newEl("h3");
const footerEl = newEl("footer");
const secondTitleEl = newEl("h3");

// const number1 = newEl("p");
// const number2 = newEl("p");

const body = document.querySelector("body");
const itemSectionEl = q(".itemsection");
const itemsEl = q("h2");

body.append(navEl);
navEl.append(titleEl1);

body.append(footerEl);
footerEl.append(secondTitleEl);

body.append(itemSectionEl);
body.append(itemsEl);

//SECTION CON URL------

const BASE_URL = "https://fakestoreapi.com/products";

fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    data
      .filter((product) => product.rating.count > 200)
      .map((product) =>
        createCard(itemSectionEl, product.image, product.title, product.price)
      );
  });

const person = prompt("Ciao! Inserisci il tuo nome utente");
titleEl1.innerText = "Ciao" + " " + person;
secondTitleEl.innerText = "Ciao" + " " + person;

//   .then(() => (loadingEl.style.display = "none"));

// titleEl.toUpperCase;
// secondTitleEl.toUpperCase;

// function capitalizeFirstLetter() {
//   return (
//     string.titleEl(person).toUpperCase() +
//     string.secondTitleEl(person).toUpperCase
//   );
// }

// capitalizeFirstLetter();

// function totalproduct (){
//     let counter = lunghezza dell'array nuovo fatto
// }
