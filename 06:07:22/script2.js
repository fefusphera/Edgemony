// Get/Set
// 1. Implementare una grafica semplice prendendo come spunto [questo shop]
// ( https://xd.adobe.com/spec/3409f0fd-25f1-4668-428f-d25447f00e7b-4238/screen/d3fb646d-a698-4eea-bb8e-91be0b0ae011/ ).
// La pagina deve comprendere:

// - Lista di prodotti che vengono mostrati.
// (Possiamo gestire quelli nascosti sia non stampandoli che aggiungendo una classe per applicare un display:none);
// - Paginazione con 3 bottoni per le pagine: (1,2,3).
// -La parte con i filtri possiamo non implementarla al momento

// 2. Partendo dal codice in calce:

// - Scrivere il codice che permette al click su un bottone della paginazione di cambiare shop.page;
// - Implementare il setter per la prop shop.page;
// - Implementare renderHTML in modo da usarla quando necessario aggiornare il contenuto della pagina;
// - Gestire la paginazione, si consiglia di farlo dentro il getter di shop.products.

// 3. Applicare l'Event Delegation sulla paginazione inserendo un solo event lister per i 3 bottoni;
// 4. Applicare l'Event Delegation sulla lista per lanciare al click di ogni prodotto un alert con stock e prezzo.

// in questo modo dico come voglio che venga visualizzato il prodotto che renderizzerò
const getProductsHTML = (product) => {
  const { img, name, price } = product;
  return `<li><img src=https://picsum.photos/445/200> <p class="title_product">${name} - ${price}€</p></li>`;
};

// questo codice serve per creare un array fittizio di oggetti
const newProducts = Array.from(Array(36), (_, index) => {
  return {
    id: 1 * index,
    name: `TV - ${index}`,
    img: "https://picsum.photos/445/200",
    price: 40 * index,
    count: 20 * index,
  };
});

const shop = {
  // prodotti da renderizzare
  _products: [],
  // pagina di riferimento
  _page: 0,
  // numero di prodotti da visualizzare nella pagina
  _perPage: 9,

  // get pages() {
  //   return this._page;
  // },
  // questo set cambia il valore di _page di shop quando clicchiamo uno dei bottoni
  setPages(newPage) {
    this._page = newPage;
    // devo nuovamente renderizzare i nuovi dati
    this.renderHTML();
  },

  // qui c'è il codice che viene eseguito per ottenere i prodotti dentro shop._products
  get products() {
    return this._product;
  },
  // qui il codice viene eseguito per impostare il valore dei prodotti dentro shop._product
  set products(newProducts) {
    this._products = newProducts;
    // chiedo a set di renderizzare/stampare in pagina
    this.renderHTML();
  },
  // questa parte mi serve per mostrare i miei prodotti nel documento, ma devo dire a set di renderizzare con questa funzione
  renderHTML() {
    const indexOfFirstProduct = this._page * this._perPage;

    const indexOfLastProduct = indexOfFirstProduct + this._perPage;

    const paginatedProducts = this._products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    const productsHTML = paginatedProducts.map(getProductsHTML).join("");
    document.querySelector(".shop").innerHTML = `<div>Page: ${this._page}</div>
      <ul>${productsHTML}</ul>`;
  },
};

// in questo modo inserisco attraverso il set i prodotti creati con l'array fittizio
shop.products = newProducts;

const pageButtons = document.querySelector(".btn_section");

pageButtons.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const buttonPage = event.target;
    const newPage = Number(buttonPage.innerText) - 1;

    shop.setPages(newPage);
  }
});

// const listProducts = document.querySelector(".shop");
// listProducts.addEventListener("click", function (event) {
//   if (event.target.tagName === "LI") {
//     console.alert(`${count} - ${price}`);
//   }
// });

// // mi richiamo i bottoni che ho in html sul file JS
// const pageButtons = document.querySelectorAll(".btn_section button");

// // mi richiamo ogni singolo bottone e per ciascuno aggiungo un evento
// pageButtons.forEach((button, _) => {
//   button.addEventListener("click", function () {
//     // la nuova paggina sarà uguale all'innertext del bottone - 1 (praticamente l'indice), ma essendo una stringa va parsato
//     const newPage = Number(this.innerText) - 1;
//     // adesso la _page di shop assumerà il valore di newPage, quindi è necessario un nuovo set per poter impostare il valore
//     shop.setPages(newPage);
//   });
// });
