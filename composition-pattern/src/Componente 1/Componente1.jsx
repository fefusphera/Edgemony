import Componente2 from "../Componente 2";

const Componente1 = ({ children }) => {
  return (
    <div>
      <Componente2>{children}</Componente2>
    </div>
  );
};

export default Componente1;
