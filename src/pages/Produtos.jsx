import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { Categories } from "../data/Produtos";
import { CartContext } from "../utils/CarrinhoContext";
 import BorderList from "../components/ui/BorderList";
import OptionsList from "../components/ui/OptionsList";
const Bordas = [
  { nome: "Sem Borda", preco: 0 },
  { nome: "Recheada com Catupiry", preco: 3 },
  { nome: "Recheada com Cheddar", preco: 3 },
];

const getProductById = (id) => {
  for (const category of Object.values(Categories)) {
    const product = category.find((p) => p.id === id);
    if (product) return product;
  }
  return null;
};

const Options = [
  {
      name: "A Bela e a Napolitana",
      description: "Mussarela, Fatias De Tomate e Parmesão",
      price: 0
  },
 
  {
      name: "Brasileira Suprema",
      description: "Calabresa Moida, Molho de Pimenta, Mussarela e Pimenta Calabresa",
      price: 8
  },
  {
      name: "Capitão Bacon",
      description: "Mussarela, Bacon e Milho",
      price: 0
  },
  {
      name: "Capitã Brócolis ",
      description: "Brócolis Com Catupiry ou Mussarela",
      price: 0
  },
  {
      name: "Capitã Margherita ",
      description: "Mussarela, Parmesão, Manjericão e Tomate",
      price: 0
  },
  {
      name: "Fênix De Frango",
      description: "Mussarela, Frango Desfiado e Catupiry",
      price: 0
  },
 
  {
      name: "Mussarela Magnífica",
      description: "Mussarela e Tomate",
      price: 0
  },
  {
      name: "Poderosa Portuguesa",
      description: "Mussarela, Presunto, Ovos e Cebola",
      price: 0
  },
  {
      name: "Sabor Caipira",
      description: "Mussarela, Catupiry e Milho Verde\r\n",
      price: 0
  },
  
  {
      name: "Costela Do Dino",
      description: "Costela desfiada, com molho barbecue, coberto de catupiry ou cheddar a escolha",
      price: 10
  },
 
  {
      name: "Du Pedação",
      description: "Mussarela, Peito De Peru, Alho Poró, Tomate Cereja E Cream Cheese\r\n\r\n",
      price: 8
  },
  {
      name: "Estrogonofe de Frango",
      description: "Delicioso estrogonofe de frango desfiado. ",
      price: 10
  },
  {
      name: "O Incrível Catuperu",
      description: "Peito de Peru com Catupiry",
      price: 8
  },
 
  {
      name: "Quarteto de Queijos",
      description: "Quatro Queijos ( Mussarela, Catupiry, Parmesão e Provolone ) ",
      price: 8
  },
  {
      name: "5 QUEIJOS ",
      description: "Mussarelo, catupiry, queijo Provolone, Gorgonzola e Parmesão",
      price: 12
  },
  {
      name: "Roma Divina",
      description: "Brócolis, queijo mussarela, catupiry verdadeiro, bacon e alho",
      price: 8
  },
  {
      name: "Sonho Americano",
      description: "Lombo, Champignon, Cebola, Mussarela, Palmito e Bacon ",
      price: 8
  },
  {
      name: "Carne Seca",
      description: "Carne Seca desfiada com Cheddar ou Catupiry a escolha",
      price: 10
  },
  {
      name: "Peperoni",
      description: "Peperoni com Mussarela",
      price: 8
  },
  {
      name: "Doce Turtle",
      description: "Creme de Chocolate ao Leite e Tortuguitas (tortuguitas sabores sortidos)",
      price: 8
  },
  {
      name: "Doce Oreo",
      description: "Creme de Chocolate ao Leite e Biscoito Oreo\r\n",
      price: 8
  },
  {
      name: "Doce Pixel",
      description: "Creme de Chocolate com avelã, chocolate ao leite ralado e Morango",
      price: 8
  },

  {
      name: "Doce Choco Íris",
      description: "Creme de Chocolate ao Leite e o verdadeiro M&Ms ",
      price: 8
  },
  

];


export default function Produto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const product = getProductById(id);
  const [quantidade, setQuantidade] = useState(1);
  const [precoTotal, setPrecoTotal] = useState(product ? product.price : 0);
  

  useEffect(() => {
    if (!product) return;
    setPrecoTotal(product.price * quantidade);
  }, [product, quantidade]);

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  const BordaChange = (event) => {
    const precoExtra = parseFloat(event.target.dataset.preco);
    setPrecoTotal((product.price + precoExtra) * quantidade);
  };
  const OptionsChange = (event) => {
    const precoOptions = parseFloat(event.target.dataset.price);
    setPrecoTotal((product.price + precoOptions) * quantidade);
  };

  const aumentarQuantidade = () => {
    setQuantidade((prev) => prev + 1);
    setPrecoTotal((prev) => prev + product.price);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade((prev) => prev - 1);
      setPrecoTotal((prev) => prev - product.price);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      precoTotal,
      quantidade,
    };
    addToCart(cartItem);
    navigate("/");
  };

  
  return (
    <section className="w-full h-screen bg-white px-0 mx-0 pb-40">
      <span className="grid place-items-end px-5 py-4 fixed z-10 w-full">
        <Link className="text-gray-500 text-3xl bg-gray-300 p-3 rounded-full" to="/">
          <IoIosClose />
        </Link>
      </span>

      <img className="w-full min-h-60 object-cover bg-blue-500" src={product.image} alt={''} loading="lazy" />

      <div className="bg-white px-2 py-5 flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">{product.title}</h2>
        <p className="text-lg font-medium">{product.description}</p>
        <p className="text-xl font-semibold">R$ {product.price.toFixed(2)}</p>
      </div>
      <div>
         <div className="  overscroll-contain">
          <OptionsList options={Options} type={product.type} borda={Bordas} Change2={BordaChange} Change={OptionsChange}/>
          <BorderList bordas={Bordas} type={product.type } Change={BordaChange}/>
         </div>

      </div>

      <div className="bg-white px-2.5 flex flex-col gap-5 pb-20">
        <span className="flex flex-row justify-between">
          <p className="text-lg text-black">Alguma observação?</p>
          <p className="text-black">0/140</p>
        </span>
        <textarea className="w-full border rounded-xl min-h-28"></textarea>
      </div>

      <div className="flex fixed bottom-0 w-full flex-row gap-2 px-2 justify-between py-2 border-t bg-white">
        <span className="grid grid-flow-col w-2/6 bg-gray-200 text-2xl place-items-center place-self-center">
          <button onClick={diminuirQuantidade}>-</button>
          <p>{quantidade}</p>
          <button onClick={aumentarQuantidade}>+</button>
        </span>
        <button className="w-4/6 bg-blue-500 py-2.5 rounded-lg text-white flex flex-row justify-between px-2" onClick={handleAddToCart}>
          <p className="text-xl font-semibold">Adicionar</p>
          <span>R$ {precoTotal.toFixed(2)}</span>
        </button>
      </div>
    </section>
  );
  
}
 
