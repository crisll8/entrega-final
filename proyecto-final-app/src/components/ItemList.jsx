// src/components/ItemList.jsx
import React from 'react';
import products from '../data'; // Importar productos desde data.js

const ItemList = () => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
