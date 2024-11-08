import React from 'react';
import { useCart } from '../contexts/CartContext';
import carritoImg from '../assets/shopping-cart.png';

const CartWidget = () => {
  const { cart } = useCart();

  return (
    <div className="cart-widget">
      <img src={carritoImg} alt="Cart" />
      <span>{cart.length}</span> {/* Mostrar cantidad de productos en el carrito */}
    </div>
  );
};

export default CartWidget;
