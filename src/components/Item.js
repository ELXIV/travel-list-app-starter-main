import React from "react";

function Item({ item, onDeleteItem, onUpdateItem }) {
  return (
    <li style={{ textDecoration: item.packed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onUpdateItem(item.id)}
      />
      {item.quantity} x {item.description}
      <button onClick={() => onDeleteItem(item.id)}>Remove</button>
    </li>
  );
}

export default Item;
