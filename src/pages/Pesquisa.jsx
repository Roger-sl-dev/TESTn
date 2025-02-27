import { useState } from "react";
import Fuse from "fuse.js";
import { Categories } from "../data/Produtos";
import FoodItem from "../components/ui/FoodItem";
import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const SearchFilter = () => {
  const [query, setQuery] = useState("");

  // Prepare um array contendo todos os produtos de todas as categorias
  const allProducts = Object.values(Categories).flat();

  // Configuração do Fuse.js para buscar pelo 'title' de cada produto
  const fuse = new Fuse(allProducts, {
    keys: ["title", "description"], // As chaves que serão usadas para a busca
    threshold: 0.3, // Quanto menor, mais exato
  });

  // Resultados da pesquisa
  const result = fuse.search(query);

  return (
    <div className="  bg-gray-200 h-screen w-screen ">
      <div className=" flex flex-row gap-3 w-full bg-white py-2 px-2 mb-5 place-items-center justify-between">
        
        <FaSearch/>
      
      

         
      <input
        type="text"
        placeholder="Pesquisar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2  focus:outline-none rounded w-4/5"
        />
        <Link to={'/'}>
        <IoIosClose className=" text-5xl"/>
        </Link>
        </div>
      <div className=" flex flex-col gap-5 px-2.5">
        {result.length > 0 ? (
          result.map((resultItem, index) => (
    

            <FoodItem id={resultItem.item.id} Titulo={ resultItem.item.title} Image={resultItem.item.image}
             Preço={resultItem.item.price}
             />
     
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
