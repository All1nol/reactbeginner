// AddProduct.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductProvider } from '../../AddProduct/__test__/AddProduct.test';
import AddProduct from '../AddProduct';

test('renders AddProduct component', () => {
  render(
    <ProductProvider>
      <AddProduct />
    </ProductProvider>
  );

  const inputElement = screen.getByPlaceholderText('Enter a product');
  expect(inputElement).toBeInTheDocument();
});

test('adds a new product on form submission', () => {
  render(
    <ProductProvider>
      <AddProduct />
    </ProductProvider>
  );

  const inputElement = screen.getByPlaceholderText('Enter a product');
  const addButton = screen.getByText('Add');

  // Type a product name and click the Add button
  fireEvent.change(inputElement, { target: { value: 'New Product' } });
  fireEvent.click(addButton);

  // Check if the new product is in the list
  const newProductElement = screen.getByText('New Product');
  expect(newProductElement).toBeInTheDocument();
});
