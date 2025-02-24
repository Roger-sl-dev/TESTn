import { IoClose } from "react-icons/io5";
import { Link, useFormAction, useNavigate } from "react-router-dom";
import SacolaItem from "../components/ui/SacolaItem";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../utils/CarrinhoContext";
import axios from "axios";
import "jsuites"
import "jsuites/dist/jsuites.css"
import TaxaDeEntrega from "../components/ui/TaxaDeEntrega";
 


export default () => {

  const Api=''

  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const Total = () => {
    return cart.reduce((total, item) => total + item.precoTotal, 0).toFixed(2);
  };

  const hClick = () => {
    navigate(`/cep`);
  };

  const [addressData, setAddressData] = useState({
    logradouro: "",
    numero: "",
    taxa:'A Definir'
    
  });

  const [Nome, setNome] = useState();
  const [Whatsapp,setWhatsapp]=useState();
  const [paymentMethod, setPaymentMethod] = useState("pix");

  const loadAddressFromLocalStorage = () => {
    const storedAddress = localStorage.getItem("endereco");
    if (storedAddress) {
      const parsedAddress = JSON.parse(storedAddress);
      setAddressData({
        logradouro: parsedAddress.logradouro || "",
        numero: parsedAddress.numero || "",
        taxa: "Gratis" || "",
        
      });
    }
  };

  useEffect(() => {
    loadAddressFromLocalStorage();
  }, []);

  const handleCheckout = async () => {
    try {
      const checkoutData = {
        amount: parseFloat(Total()) * 100,
        customer: {
          name: Nome,
          phone: ""
        },
        return_url: "",
        cancel_url: "",
        address: {
          logradouro: addressData.logradouro,
          numero: addressData.numero
        },
        payment_method: paymentMethod
      };

      const response = await axios.post(Api, checkoutData);

      if (response.data && response.data.secureUrl) {
        window.location.href = response.data.secureUrl;
      } else {
        alert("Erro ao processar pagamento.");
      }
    } catch (error) {
      console.error("Erro ao processar o pagamento:", error);
      alert("Houve um erro ao processar seu pagamento.");
    }
  };

  return (
    <>
      <section className="bg-gray-200 h-screen w-screen">
        <div className="flex flex-row border-b justify-between py-2 px-4 bg-white">
          <p className=" text-xl text-black font-bold ">O Pedação - Pedaço de Pizza Enorme</p>
          <Link to={'/'}>
            <IoClose className=" text-2xl" />
          </Link>
        </div>
      <TaxaDeEntrega/>

        <div className="w-full px-2 mt-5 flex flex-col gap-5">
          <span className="flex flex-row justify-between px-4 text-lg text-black font-medium">
            <p>Sua sacola</p>
            <p>Limpar</p>
          </span>
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center text-3xl capitalize my-10">O carrinho está vazio.</p>
          ) : (
            <div className="flex flex-col gap-2">
              {cart.map((item, index) => (
                <SacolaItem
                  key={index}
                  idd={item.id}
                  Remover={() => removeFromCart(item.id)}
                  Titulo={item.title}
                  Image={item.image}
                  Preço={item.price}
                  Numero={item.quantidade}
                />
              ))}
            </div>
          )}
          <span className="grid place-content-center w-full">
            <Link to={'/'} className="text-center text-xl font-bold text-blue-500">
              ADICIONAR MAIS ITENS
            </Link>
          </span>
        </div>

        <div className="p-5 flex flex-col gap-3 fixed bottom-1 w-full bg-white">
          <span className="flex text-lg text-black flex-row justify-between w-full bg-white">
            <span>
        
              <p>Taxa de entrega</p>
              <p>Total</p>
            </span>
            <span>
        
              <p>{addressData.taxa}</p>
              <p>{Total()}</p>
            </span>
          </span>
          <span>
            <input
              type="text"
              value={Nome}
              placeholder="Nome"
              className="w-full mb-2 p-2 text-lg "
              onChange={(e) => setNome(e.target.value)}
            />
              <input
               data-mask="(00)00000-0000"
              type="text"
              value={Whatsapp}
              placeholder="Whatsapp"
              className="w-full p-2 text-lg mb-2.5"
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            
            <span className="flex flex-row gap-1">
              <input
                className="w-[75%] p-2"
                type="text"
                value={addressData.logradouro}
                placeholder="Endereço"
                onChange={(e) =>
                  setAddressData({ ...addressData, logradouro: e.target.value })
                }
              />
              <input
                type="text"
                className="w-[25%] p-2 "
                value={addressData.numero}
                placeholder="Número"
                onChange={(e) =>
                  setAddressData({ ...addressData, numero: e.target.value })
                }
              />
            </span>
          </span>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="pix">Pix</option>
            <option value="cartao">Cartão</option>
          </select>
          <button className="bg-blue-500 text-xl p-2 text-white font-semibold  rounded-lg" onClick={handleCheckout}>
            Finalizar
          </button>
        </div>
      </section>
    </>
  );
};
