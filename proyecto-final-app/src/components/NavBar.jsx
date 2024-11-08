import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/catalog">Catálogo</a></li>
          <li><a href="/checkout">Checkout</a></li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default Navbar;
