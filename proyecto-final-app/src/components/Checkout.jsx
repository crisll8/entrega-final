import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name} - Quantity: {item.quantity}</li>
        ))}
      </ul>
      <p>Total: ${totalAmount}</p>
      <button onClick={clearCart}>Complete Purchase</button>
    </div>
  );
};

export default Checkout;
