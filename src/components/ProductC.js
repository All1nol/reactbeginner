import React, { useState } from 'react';
import { useProduct } from '../providers/product';
import EditProduct from './EditProduct';

const ProductC = () => {
  const { productList, deleteProduct, handleEdit } = useProduct();
  const [editingId, setEditingId] = useState(null);

  const startEditing = (id) => {
    setEditingId(id);
    handleEdit(id); // Call handleEdit when starting to edit
  };

  const stopEditing = () => {
    setEditingId(null);
  };

  return (
    <ul>
      {productList.map((product) => (
        <li key={product.id}>
          {product.name}
          <button onClick={() => startEditing(product.id)}>Edit</button>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          {editingId === product.id && <EditProduct id={product.id} onStopEditing={stopEditing} />}
        </li>
      ))}
    </ul>
  );
};

export default ProductC;
