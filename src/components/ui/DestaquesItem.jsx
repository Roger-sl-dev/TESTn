import React from "react";
import { useNavigate } from "react-router-dom";

export default({ Image, Titulo, Descrição, Preço,id }) => {
  const navigate = useNavigate();

  const hClick = () => {
    navigate(`/produto/${id}`);
  };
  return (
    <div onClick={hClick} className="flex flex-col justify-between gap-2 p-1.5 bg-white rounded-xl h-88">
      <img className="h-40 rounded-xl" src={Image} alt={Titulo} />
      <h3 className="font-semibold text-xl">{Titulo}</h3>
      <p className="font-medium text-lg line-clamp-2">{Descrição}</p>
      <p className="font-semibold text-xl">R$ {Preço}</p>
    </div>
  );
};

