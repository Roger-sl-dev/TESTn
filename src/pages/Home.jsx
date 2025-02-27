import React from 'react';
import Destaques from '../components/layout/Destaques';
import { Categories } from '../data/Produtos';
import Foodlist from '../components/layout/Foodlist';
import { Link, useNavigate } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import TaxaDeEntrega from '../components/ui/TaxaDeEntrega';
import { FaSearch } from "react-icons/fa";
import { FaGift } from "react-icons/fa";

const Logo = "https://storage.googleapis.com/prod-cardapio-web/uploads/company/logo/8426/d10b1724logo-pedacao.png";
const Iconss = "data:image/png;base64,...";  // A string do ícone base64

export default() => {


  
  return (
    <HomeLayout>

    
    <div className=' bg-[#f4f5f7] mb-20'>
      <section className="flex flex-col">
        <div className="w-screen bg-cover min-h-40 h-40 bg-[url('../src/assets/Banner.jpeg')]"></div>
        <div className="grid w-full place-items-center bg-white rounded-b-2xl py-5">
          <span className="grid place-items-center w-full z-20 -mt-18">
            <img className="size-20 rounded-full" src={Logo} alt="Logo" />
          </span>
            <h3 className='  text-xl font-semibold text-black'  >O Pedação - Pedaço de Pizza Enorme</h3>
          <span className="flex flex-row text-lg  place-items-center gap-2">
            <p>3km</p>
            <div className="size-2 bg-black rounded-full"></div>
            <a href="">Mais informações</a>
          </span>
          <span className="text-green-500 font-semibold text-msm">Aberto Agora</span>
        </div>
      </section>
      <section className="mx-2 my-5">
        <TaxaDeEntrega/>
      
      </section>
      <section className="mx-2 my-5">
        <div className="flex flex-col gap-2 bg-white rounded-xl p-2">
          <span className="flex flex-row place-items-center gap-2">
            <span className=' bg-blue-500 p-2 rounded-full'>

            <FaGift className=' text-2xl  text-white'/>
            </span>
            <p className="text-sm font-semibold">Programa de fidelidade</p>
          </span>
          <p className=" text-msm  font-light">
            A cada <span className=" font-medium">R$ 1,00</span> em compras você ganha <span>1 ponto</span> que pode ser trocado por prêmios.
          </p>
          <p className=" font-light text-msm">
            Os novos clientes ganham automaticamente <span className=" font-medium">5 pontos.</span>
          </p>
        </div>
      </section>
      <section className="mx-2 my-5 flex flex-row justify-between">
          <p className=' bg-white p-2 rounded-lg text-lg text-gray-600 grid align-middle text-center'>Lista de categorias</p>
        <Link className=' flex flex-row bg-white  p-3 rounded-xl gap-4 place-items-center' to={'pesquisa'}>
         <FaSearch className=' text-xl fill '/>
        </Link>
         
      </section>
            

      <section className="my-10 flex flex-col gap-5 px-2">
        <h2 className="text-xl  font-semibold">Destaques</h2>
        <Destaques/>
      </section>

      <section className="my-10 px-2 flex flex-col gap-5 overflow-hidden">
      {Object.entries(Categories).map(([category, products]) => (
        <div key={category}>
          <h2 id={category} className="text-xl my-5 text-gray-800 font-semibold">{category}</h2>
         <Foodlist products={products} />
        </div>
      ))}


      </section>

      {/* Footer Section */}
      <section className="py-10 bg-blue-500">
        <p className="text-xl text-center text-white">O Pedação - Pedaço de Pizza Enorme 2025. Todos os direitos reservados</p>
      </section>
    </div>
    </HomeLayout>
    
  );
};

