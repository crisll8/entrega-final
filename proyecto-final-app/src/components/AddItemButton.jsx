import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const AddItemButton = ({ item }) => {
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart(item);
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
};

export default AddItemButton;
