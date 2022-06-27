//ESERCIZIO FOR EACH
//---RISORSA MDN---
// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));

function myFunction1() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  actionFn = (element, index, array) => console.log(element);
  const elementList = array.forEach(actionFn);
}

myFunction1();

//ESERCIZIO FILTER1
//---RISORSA MDN---
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);

function myfunction2() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  numeripari = (element, index, array) => element % 2 === 0;
  const evenNumbers = array.filter(numeripari);

  console.log(evenNumbers);
}

myfunction2();

//ESERCIZIO FILTER2
//---RISORSA MDN---1

// const array1 = [1, 2, 3];
// console.log(array1.includes(2));
// // true
// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));
// // true
// console.log(pets.includes('at'));
// // false

//---RISORSA MDN---2

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// // expected output: 1

// // start from index 2
// console.log(beasts.indexOf('bison', 2));
// // expected output: 4

// console.log(beasts.indexOf('giraffe'));
// ----- expected output: -1 (SPUNTA -1 PERCHE' VUOL DIRE MATCH NOT FOUND!)
//The indexOf() method returns -1 if the value is not found.

function myFunction3() {
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
  const array2 = [10, 1, 2, 5, 6];

  console.log(array1.includes(array2)); //ovviamente false -- Mi servono solo True

  //devo creare l'intersezione
  //devo chiamare in console log l'intersezione

  let intersection = array1.filter(function (number) {
    return array2.indexOf(number) > -1; //RICHIAMO IL > di -1
  });

  console.log(intersection);

  //voglio creare un nuovo array che mi aggiunga soltanto true

  // const array1 = [1, 4, 9, 16];
  // const map1 = array1.map(x => x * 2);
  // console.log(map1);

  //   const map1 = array1.map();
}

myFunction3();

//---ESERCIZIO TIMEOUT---
function myFunction4() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  actionFn = (element, index, array) => console.log(element);
  const elementList = array.forEach(actionFn);
  setTimeout(myFunction4, 1000);
}

myFunction4();

//non riesco a infilarlo nel ciclo for Each
