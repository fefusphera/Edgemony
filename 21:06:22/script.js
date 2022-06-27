// N1 Scriviamo una funzione che passata al map, dato un array di nomi torna una lista di "indice + Nome". es:
// const names = ['Luca', 'Gabriele'];
// namesToList(names) -> ['1 - Luca', '2 - Gabriele']

// N2 Scriviamo una funzione che passata al map, converta ogni elemento al propri indice inverso. es:
// const names = ['Luca', 'Gabriele', 'Richard', 'Roberta'];
// namesToList(names) -> [3, 2, 1, 0];

// N3 Scriviamo una funzione che passata al map, dato un array ne torni uno al contrario. es:
// const names = ['Luca', 'Gabriele'];
// namesToList(names) -> ['Gabriele', 'Luca'];

//---ESERCIZIO 1---
//---REFERENCES---
//const array1 = [1, 4, 9, 16];
//--- pass a function to map
//const map1 = array1.map(x => x * 2);
//console.log(map1);
//--- expected output: Array [2, 8, 18, 32]

function namesList() {
  const names = ["Luca", "Gabriele", "Pippo", "Pluto"];
  const namesToIndex = (item, index, _array) => {
    return index + 1 + " - " + item;
  };
  console.log(names.map(namesToIndex));
}

namesList();

function indexReverse() {
  const names = ["Luca", "Gabriele", "Pippo", "Pluto"];
  const indexReverse = (_, index, array) => {
    return array.length - 1 - index;
  };
  console.log(names.map(indexReverse));
}

indexReverse();

//---ESERCIZIO 3---
// The *********at()********** method takes an integer value and returns the item at that index,
// allowing for positive and negative integers.
// Negative integers count back from the last item in the array.

function namesReverse() {
  const names = ["Luca", "Gabriele", "Pippo", "Pluto"];

  const namesReverse = (_, index, array) => {
    const reversedIndex = array.length - 1 - index;
    return array.at(reversedIndex);
  };
  console.log(names.map(namesReverse));
}

namesReverse();
