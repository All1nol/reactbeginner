import React, { useState } from "react";
import { useProduct } from "../../providers/product";
// Replace this line in AddProduct.js
// const { nanoid } = require('nanoid');

// With this line
import { nanoid } from 'nanoid/esm';

const AddProduct = () => {
  const { addProduct } = useProduct();
  const [newProduct, setNewProduct] = useState("");

  const handleAddProduct = (event) => {
    event.preventDefault();
    if (newProduct.trim() === "") return;

    const newProductItem = {
      id: nanoid(),
      name: newProduct,
    };

    addProduct(newProductItem);
    setNewProduct("");
  };

  return (
    <form onSubmit={handleAddProduct}>
      <input
        type="text"
        placeholder="Enter a product"
        value={newProduct}
        onChange={(event) => setNewProduct(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddProduct;
