import React from 'react';

const ProductItem = ({ productId, productName, onEdit, onDelete }) => (
  <li key={productId}>
    {productName}
    <button onClick={() => onEdit(productId)}>Edit</button>
    <button onClick={() => onDelete(productId)}>Delete</button>
  </li>
);

export default ProductItem;