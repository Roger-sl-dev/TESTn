import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Para navegação
import axios from "axios";
import "jsuites"
import "jsuites/dist/jsuites.css"
import Endereco from "../../pages/Endereco";

export default () => {
  const [cep, setCep] = useState("");
  const navigate = useNavigate();

  const handleCepChange = (event) => {
    setCep(event.target.value.replace(/\D/g, "")); // Remove caracteres não numéricos
  };


  const fetchAddress = async () => {
    if (cep.length === 8) {
     
      try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  
        if (!data.erro) {
          // Redireciona para o formulário com os dados do endereço
          navigate("/endereço", { state: { endereco: data } });
        } else {
          alert("CEP inválido! Tente novamente.");
        }
      } 
      catch (error) {
        console.error("Erro ao buscar CEP:", error);
      } 
    }
  };
  
  return (
    <Endereco>

   <section className=" flex flex-col gap-5  place-items-center p-5">
    <h3 className=" text-lg font-semibold text-center ">Informe seu CEP para verificarmos se entregamos em sua região</h3>
    <input value={cep} onChange={handleCepChange} className=" text-3xl focus:border-amber-300 focus:outline-none text-center" type="text" data-mask="00000-000" placeholder="00000-000" />
    <span className=" w-full px-5">

    <button onClick={fetchAddress} className=" p-2 bg-blue-400 font-semibold  text-xl rounded-lg uppercase text-white w-full">
      Buscar cep
    </button>
    </span>
    <Link to={'/endereço'} className=" text-md font-medium">
     Não sei meu cep 
    </Link>
   </section>
    </Endereco>
  );
};



