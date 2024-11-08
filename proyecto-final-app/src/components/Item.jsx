import React from 'react';

const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>${product.price}</span>
      <button>Add to Cart</button> {/* Añadir al carrito */}
    </div>
  );
};

export default Item;
