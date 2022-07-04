//ESERCIZIO 1

// const obj1 = {foo: 'bar'};
// const obj2 = {name: 'Mio nome'};

let firstGet = {
  foo: "bar",
  name: "Fefu",
  surname: "Black",

  get fullname() {
    return `${this.foo} ${this.name} ${this.surname}`;
  },
};

console.log(firstGet.fullname);

//ESERCIZIO 2
//Usiamo il filter per prendere solo le stringe >= 10 caratteri
//da un array, usando il destructuring per prendere la length

let ingredient = ["zucchero", "cannella", "ognicosabella"];

let [first, second, third] = ingredient;

let result = ingredient.filter((ingredient) => ingredient.length >= 10);

console.log(result);

// let someIngredient = ingredient.filter(myFunction);
// function myFunction(value) {
//     return value ingredient.length.value
// }

// console.log(someIngredient);

//ESERCIZIO 3
//leggere _products nel getter
//sovrascrivere _products nel setter

//contestualmente quando usiamo il setter mostriamo tutti i prodotti in innerHTML di body

let shop = {
  get shopItem() {
    `${this.id} ${this.name} ${this.price}`;
  },

  set shopItem(value) {
    [this.id, this.name, this.price] = value.split(" ");
    document.getElementById("item1").innerHTML = this.shopItem1;
  },
};

shop.shopItem1 = "1 TV 40";
shop.shopItem2 = "2 PC 30";

console.log(shop);

let listItem = document.getElementById("listItem");

let li1 = document.createElement("li");
li1.textContent = shop.shopItem1;

let li2 = document.createElement("li");
li2.textContent = shop.shopItem2;

listItem.appendChild(li1);
listItem.appendChild(li2);

// console.log(listItem.innerHTML);

// const createCard = (parent, id, name, price) => {
//   const card1 = document.querySelector(".item1");
//   const card2 = document.querySelector(".item2");

//   card1.className = "test1";
//   card2.className = "test2";

//   body.append(createCard);
// };

// let item1 = shop.item1;
// let item2 = shop.item2;
