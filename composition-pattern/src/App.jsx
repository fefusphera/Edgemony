import Componente1 from "./Componente 1";
// import Componente2 from "./Componente 2";
// import Componente3 from "./Componente 3";
import Pantone from "./Pantone";
import "./App.css";

function App() {
  const pantone = {
    color1: "#6d6875",
    color2: "#b5838d",
    color3: "#e5989b",
  };

  return (
    <div className="App">
      <Componente1>
        <Pantone data={pantone} />
      </Componente1>
    </div>
  );
}

export default App;

/* <componente1 children>
    <componente2 children>
      <componente3 children>
        <PANTONE -div colorato -dati />
      </componente3>
    </componente2>
</componente1> */

//dati
