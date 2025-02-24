import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Endereco from "../../pages/Endereco";

export default () => {
  const location = useLocation();
  const endereco = location.state?.endereco || {};
  let navigate =useNavigate()
  const [formData, setFormData] = useState({
    logradouro: endereco.logradouro || "",
    numero: "",
    bairro: endereco.bairro || "",
    complemento: "",
    pontoReferencia: "",
    cidade: endereco.localidade || "",
    estado: endereco.uf || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleConfirm = () => {
    localStorage.setItem("endereco", JSON.stringify(formData));
    
    navigate('/')
  };

  return (
    <Endereco>
      <div className="p-5 ">
        <form className="flex flex-col gap-8">
          <span className="flex flex-row gap-2 w-full">
            <input
              value={formData.logradouro}
              onChange={handleChange}
              type="text"
              name="logradouro"
              placeholder="Endereço"
              className="border p-2 rounded-md w-4/5"
            />
            <input
              value={formData.numero}
              onChange={handleChange}
              type="number"
              name="numero"
              placeholder="N"
              className="w-1/5 border p-2 rounded-md"
            />
          </span>
          <input
            value={formData.bairro}
            onChange={handleChange}
            type="text"
            name="bairro"
            placeholder="Bairro"
            className="border p-2 rounded-md"
          />
          <input
            value={formData.complemento}
            onChange={handleChange}
            type="text"
            name="complemento"
            placeholder="Complemento"
            className="border p-2 rounded-md"
          />
          <input
            value={formData.pontoReferencia}
            onChange={handleChange}
            type="text"
            name="pontoReferencia"
            placeholder="Ponto de referência"
            className="border p-2 rounded-md"
          />
          <span className="flex-row flex gap-2">
            <input
              value={formData.cidade}
              onChange={handleChange}
              type="text"
              name="cidade"
              placeholder="Cidade"
              className="border p-2 rounded-md w-4/5"
            />
            <input
              value={formData.estado}
              onChange={handleChange}
              type="text"
              name="estado"
              placeholder="Estado"
              className="border p-2 rounded-md w-1/5"
            />
          </span>
          <span className="flex flex-col gap-5">
            <button
              type="button"
              onClick={handleConfirm}
              className="bg-blue-500 text-xl uppercase font-semibold text-white px-4 py-2 rounded-md"
            >
              Confirmar
            </button>
            <Link
              to={'/cep'}
              className="border-2 text-center font-semibold text-xl uppercase border-blue-400 text-blue-400 px-4 py-2 rounded-md"
            >
              Voltar
            </Link>
          </span>
        </form>
      </div>
    </Endereco>
  );
};
