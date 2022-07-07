// Scriviamo un'applicazione JavaScript che permetta di soddisfare i seguenti criteri:

// Da utente voglio trovare al caricamento della pagina una
//barra di testo vuota e un bottone "Aggiungi". -ok

// Da utente voglio trovare al caricamento della pagina trovare una
//lista, inizialmente vuota. -ok

// Da utente voglio che, dopo aver riempito l'input, premendo invio possa
//aggiungere un elemento alla lista. L'elemento deve contenere:
// ----Un input di tipo checkbox;
// ----Uno span con il testo dell'input; -ok

// Da utente voglio che dopo ogni submit il form si svuoti.
// Da utente voglio poter segnare alcuni elementi come fatti cliccando sull'input.

const inputEl = document.querySelector(".inputEl");
const btn = document.querySelector(".btn");
// const list = document.querySelector("singleTask");NO

// const newTask = inputEl.value; ---probabilmente inutile

btn.addEventListener("click", addListBtn);

function addListBtn(event) {
  //   console.log(inputEl.value); so che funziona okay
  // inputEl.value chiamato newTask, va dentro li

  event.preventDefault(); //dato per fede

  const newTaskHTML = inputEl.value;

  //   const listEl = document.querySelector(".singleTask");
  const taskList = document.querySelector(".taskList");
  const newTask = document.createElement("li");
  newTask.innerHTML = `<li><input type="checkbox" /> <span>${newTaskHTML}</span></li>`;
  taskList.append(newTask);

  inputEl.value = "";

  //gli devo dire che task list si deve riempire di newtaskhtml

  //   const newTaskHTML = `<li><input type="checkbox" /> <span>${newTask}</span></li>`;

  //ora però cambia di volta in volta
  //come faccio a farli rimanere? APPENDENDOLI
}
