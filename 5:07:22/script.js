//ESERCIZIO 1

const product = {
  id: 1,
  name: "TV",
  price: 40,
  addons: {
    decoder: 10,
    qled: 40,
    stereo: 20,
  },
};

console.log(Object.values(product.addons));

const values = Object.values(product.addons);

let sum = 0;
let fullOptionalPrice = values.forEach((val) => (sum += val));

console.log(sum + product.price);

// usiamo Object.values per sommare ed ottenere -> 110

//ESERCIZIO 2

const getProductHTML = (product) => {
  const { name, price } = product;
  return `<li>${name} - ${price}€</li>`;
};

const shop = {
  name: "Edgemonics",
  _products: [],
  _page: 1, // pagina corrente
  _per_page: 2, // numero di risultati per pagina

  get products() {
    /**
     * Qui dentro dovremmo riuscire a paginare i prodotti.
     * Possiamo procurarci un indice iniziale ed uno finale lavorando con this._page e this._per_page
     * */
    console.log("Stai leggendo i prodotti di ", this.name);
    const indexOfLastPost = this._page * this._per_page;
    const indexOfFirstPost = indexOfLastPost - this._per_page;
    const paginatedProducts = this._products.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    // const startIndex = 0; // ...
    // const endIndex = 0; // ...
    // const paginatedProducts = this._products;

    return paginatedProducts;
  },

  set products(newProducts) {
    /**
     * Il consiglio è quello di spostare la parte di renderHTML dentro una funzione indipendente,
     * così da rendere il metodo più snello
     * **/

    this._products = newProducts;

    const productsHTML = this.products.map(getProductHTML).join("");
    document.body.innerHTML = `
          <h2>Offerte lampo</h2>
          <ul>${productsHTML}</ul>
      `;
  },

  set page(newPage) {
    /**
     * Aggiorniamo la pagina corrente.
     * Sarà che dobbiamo aggiornare il DOM anche qui?
     * */
  },
  // const indexOfLastPost = (this._page * this._per_page);
  // const indexOfFirstPost = indexOfLastPost - this._per_page;
  // const paginatedProducts = this._products.slice(indexOfFirstPost, indexOfLastPost);

  renderHTML() {
    /**
     * Aggiorniamo il DOM stampando i risultati a schermo.
     * Avendo ora anche la paginazione, sarebbe il caso di mettere il nostro shop dentro un div specifico div.shop
     * con una struttura del genere
     * <body>
     *  div.shop -> aggiornato ad ogni chiamata della funzione
     *  div.pagination -> questo non si tocca mai
     * </body
     * e gestire la paginazione in modo separato, inserendo gli event listener una sola volta
     * **/
  },
};

shop.products = [
  {
    name: "prova1",
    price: 320,
  },
  {
    name: "prova2",
    price: 200,
  },
  {
    name: "prova3",
    price: 400,
  },
  {
    name: "prova4",
    price: 320,
  },
  {
    name: "prova5",
    price: 200,
  },
  {
    name: "prova6",
    price: 400,
  },
];

const pageOne = document.createElement("button");
const pageTwo = document.createElement("button");
const pageThree = document.createElement("button");
const btnSection = document.createElement("section");
btnSection.className = "btn_section";

pageOne.innerHTML = 1;
pageTwo.innerHTML = 2;
pageThree.innerHTML = 3;

document.body.append(btnSection);
btnSection.append(pageOne, pageTwo, pageThree);
// let divPages = document.createElement("div");
// divPages.innerHTML = "pulsanti";
// document.body.appendChild(div);

// let btn = document.createElement("button");
// btn.innerHTML = "1";
// document.body.appendChild(btn);
