import React from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  return (
    <section>
      <h2>{greeting}</h2>
      <ItemList />
    </section>
  );
};

export default ItemListContainer;
