//in html un form con una lista dove vado a mettere cose -ok
//const con Link API
//fetch con il link di cui prima THEN
//clickbutton mi spunta la <LI> di fetch

//submit mi fa la ricerca parole chiave

const formEl = document.querySelector(".searchForm");
const inputEl = formEl.querySelector("input");
const listEl = document.querySelector(".searchList");

const SITE_URL = "https://openlibrary.org";
const BASE_API_URL = "https://openlibrary.org/search.json?q=";

formEl.addEventListener("click", function (event) {
  event.preventDefault(); //lo accettiamo per fede

  //dobbiamo intanto fare il VALUE dell'input
  //formattiamo perchè questo API ha i criteri di ricerca in questo modo
  //quindi se non scriviamo col + non dovrebbe spuntarci

  const inputValue = inputEl.value;
  const searchFormatted = inputValue.replaceAll(" ", "+");
  const apiURL = `${BASE_API_URL}/${searchFormatted}`;

  //   console.log("--->", apiURL);

  fetch(apiURL) //si prende la versione pure formattata
    .then((response) => {
      const json = response.json();
      return json;
    })
    .then((json) => {
      //secondo then risposta primo then
      listEl.innerHTML = json.docs
        .map((doc) => {
          return `<li>${doc.title}</li>`;
        })
        .join("");
    })

    .catch((err) => {
      listEl.innerHTML = `<p>${err}</p>`;
      //   return [];
    });
});
