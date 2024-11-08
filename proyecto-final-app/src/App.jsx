import React from 'react';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a nuestra tienda" />
    </CartProvider>
  );
};

export default App;
