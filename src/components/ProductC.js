import React, { useState } from 'react';
import { useProduct } from '../providers/product';
import EditProduct from './EditProduct';

const ProductC = () => {
  const { productList, deleteProduct } = useProduct();
  const [editingProduct, setEditingProduct] = useState(null);

  const startEditing = (product) => {
    setEditingProduct(product);
  };

  const stopEditing = () => {
    setEditingProduct(null);
  };

  return (
    <ul>
      {productList.map((product) => (
        <li key={product.id}>
          {product.name}
          <button onClick={() => startEditing(product)}>Edit</button>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          {editingProduct && editingProduct.id === product.id && (
            <EditProduct product={editingProduct} onStopEditing={stopEditing} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProductC;