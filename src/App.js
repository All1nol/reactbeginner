import React from "react";
import { ProductProvider } from "./providers/product";
import AddProduct from "./components/AddProduct/AddProduct";
import ProductC from "./components/Card/ProductC";

function App() {
  return (
    <div>
      <h1>Shopping List</h1>
      <AddProduct />
      <ProductC />
    </div>
  );
}

export default function AppWithProviders() {
  return (
    <ProductProvider>
      <App />
    </ProductProvider>
  );
}

