import React, { useState } from "react";
import { useProduct } from "../providers/product";

const EditProduct = ({ id, onStopEditing }) => {
  const { editProduct } = useProduct();
  const [editValue, setEditValue] = useState("");

  const handleSaveEdit = () => {
    editProduct(id, editValue);
    setEditValue("");
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
