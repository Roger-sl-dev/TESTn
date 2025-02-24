
// ProductList.jsx
import React from 'react';
import FoodItem from "../ui/FoodItem"

export default ({ products }) => {
  return (
    <div className="flex flex-col gap-2.5">
      {products.map(product => (
        <FoodItem
          id={product.id}
          Image={product.image}
          Preço={product.price}
          Texto={product.description}
          Titulo={product.title}
        />
      ))}
    </div>
  );
};


