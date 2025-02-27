import React from "react";
import { useNavigate } from "react-router-dom";

export default({ Image, Titulo, Descrição, Preço,id }) => {
  const navigate = useNavigate();

  const hClick = () => {
    navigate(`/produto/${id}`);
  };
  return (
    <div onClick={hClick} className="flex flex-col w-44 justify-between gap-2 p-2 bg-white rounded-xl ">
      <img className="h-36 rounded-xl" src={Image} alt={Titulo} />
      <h3 className="text-lg font-semibold text-gray-700 line-clamp-2">{Titulo}</h3>
      <p className="text-md font-light text-gray-500 line-clamp-2">{Descrição}</p>
      <p className="font-semibold text-sm">R$ {Preço}</p>
    </div>
  );
};

