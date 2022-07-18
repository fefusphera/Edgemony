//per prima cosa creiamo un array
//utilizzando array from.

//dentro gli oggetti possiamo avere delle funzioni
//abbiamo due funzioni dentro l'oggetto shop

//array from trasforma il primo parametro in un array
//stiamo creando un nuovo array

const newProducts = Array.from(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  (_, index) => {
    // "_" segnaposto, tutto quello che devi tornare fuori dalla funzione è quello che gli do io
    return {
      id: 1,
      name: `TV - ${index}`,
      price: 40 + index, //+ index per avere prezzi diversi
    };
  }
);
//^^^lo abbiamo fatto solo x creare i prodotti^^^

const getProductHTML = (products) => {
  const { name, price } = products;
  return `<li>${name} - ${price}€</li>`;
};
join("");

// console.log(getProductHTML);

const shop = {
  page: 0, //partiamo da 0 come index
  perPage: 4, //sono gli elementi per pagina che visualizzerem

  products: [], //l'array di prodotti

  //aggiunto successivamente per paginazione:

  setPage(newPage) {
    this.page = newPage;
    //voglio che mi refreshi la pagina quando vado a modificare
    //le cose. è la stessa cosa fatta in set Product
    this.renderHTML();
  },

  get products() {
    return this.products;
  },

  //get products torna i prodotti dentro products
  getProducts() {
    //mi calcoli l'indice dei prodotti per la paginazione
    const startIndex = this.page * this.perPage;
    const endIndex = startIndex + this.perPage;

    const slicedProducts = this.products.slice(startIndex, endIndex);

    return slicedProducts;
  },
  //quando utilizzeremo set prenderemo una lista di prodotti
  //e li andremo a mettere in this.products = products;
  //quando faremo il get (SALI) faremo il return dei products

  //set products importa i prodotti dentro shop.products e stampa
  //in pagina

  //PERCHE ho dovuto impostarlo come parametro per farlo spuntare?!
  setProducts(products) {
    this.products = products;
    this.renderHTML();
  },

  renderHTML() {
    const productsHTML = this.getProducts().map((product) => {
      const { name, price } = product;
      //
      return `<li>${name} - ${price}€</li>`;
    });

    document.querySelector(".shop").innerHTML = `
    <h2>Offerta Lampo</h2>
    <div>Page: ${this.page}</div>
    <ul>${productsHTML}<ul> 
    `;
  },
};
//set products prende la lista di prodotti e la mette dentro products
//quindi ci metto newProducts che abbiamo creato

shop.setProducts(newProducts);

//Implementiamo la paginazione -ho mal di testa
//query selector all perchè mi servono tutti i bottoni

const $button = document.querySelectorAll(".pagination button");
// console.log($button);

//.pagination in html

//per ogni bottone dobbiamo far si che cliccandolo eseguiamo un'operazione

$button.forEach(($button, index) => {
  console.log($button);
  $button.id = index;
  $button.addEventListener("click", function () {
    const newPage = Number(this.innerText) - 1;
    shop.setPage(newPage);
    event.preventDefault();

    console.log("shop.page", shop.page);
  });
});

//faccio un altro set con setPage
