import React, { useState } from "react";
import { useProduct } from "../providers/product";

const EditProduct = ({ product, onStopEditing }) => {
  const { editProduct } = useProduct();
  const [editValue, setEditValue] = useState(product.name);

  const handleSaveEdit = () => {
    editProduct(product.id, editValue);
    onStopEditing();
  };

  return (
    <div>
      <input
        type="text"
        value={editValue}
        onChange={(event) => setEditValue(event.target.value)}
      />
      <button onClick={handleSaveEdit}>Save</button>
    </div>
  );
};

export default EditProduct;