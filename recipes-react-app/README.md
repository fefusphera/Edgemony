ESERCIZI:

Creare usando CRA una applicazione. Inserire "React router" come dipendenza e implementare un routing che permetta di:

Mostrare <HomePage /> in "/";
Mostrare <CatalogPage /> in "/catalogo";
Mostrare <ErrorPage /> in tutti gli altri casi(miro);
Creare una <Navbar /> visibile su tutte le pagine;

--------Documentazione:

Sintassi:

 <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>,

<BrowserRouter> is the recommended interface for running React Router in a web browser. A <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.

IN APP ---> <route> <-----

---

<nav>
    <Link to="/about">About</Link>
</nav>

//

<ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
