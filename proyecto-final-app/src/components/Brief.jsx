import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Brief = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Purchase Summary</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity} - Price: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brief;
