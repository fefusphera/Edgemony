import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./pages/Navbar";
import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="*" element={<ErrorPage name="prova" status={404} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <BrowserRouter>
<App />
</BrowserRouter> */
}
