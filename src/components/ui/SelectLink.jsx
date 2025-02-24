import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use this hook to navigate

export default () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate(); // Hook to navigate between routes

  

  // Definindo as categorias como objetos com 'nome' e 'valor'
  const categories = [
    { nome: 'Pizza Tradicional (Inteira)',  },
    { nome: 'O Pedação - Sabores Tradicionais', valor: 'categoria-2' },
    { nome: 'Categoria 3', valor: 'categoria-3' },
    { nome: 'Categoria 4', valor: 'categoria-4' },
  ];

  return (
    <div className="w-full max-w-xs">
   
      <select
        id="category"
        value={selectedCategory}
        onChange={''} 
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Selecione...</option>
        {categories.map((category, index) => (
          <option key={index} value={category.valor}>
            <Link to={`#${category.nome}`}>
            {category.nome}
            </Link>

          </option>
        ))}
      </select>
    </div>
  );
};
