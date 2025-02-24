import Navbar from "../components/layout/Navbar";
import { GiShoppingBag } from "react-icons/gi";
import { useContext } from "react";
import { CartContext } from "../utils/CarrinhoContext";
import { Link } from "react-router-dom";

export default ({ children }) => {
  const { cart } = useContext(CartContext);
  const Total = () => {
    return cart.reduce((total, item) => total + item.precoTotal, 0).toFixed(2);
  };
  return (
    <>
      <section>
        {children}
        <span></span>
        <span className="w-full z-10 flex flex-col fixed bottom-0">
          {cart.length > 0 && (
            <Link to={'sacola'}>
            <div
              id="sacola"
              className="flex flex-row bg-blue-500 text-white justify-between px-3 py-5"
              >
              <GiShoppingBag className="text-3xl" />
              <button className="text-2xl font-bold">Ver Sacola</button>
              <p className="text-xl font-semibold">R$ {Total()}</p>
            </div>
                </Link>
          )}
          <Navbar />
        </span>
      </section>
    </>
  );
};
