import React from 'react';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import AddItemButton from '../AddItemButton/AddItemButton';
import Description from '../Description/Description';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <Description text={item.description} />
      <ItemQuantitySelector />
      <AddItemButton item={item} />
    </div>
  );
};

export default ItemDetail;
