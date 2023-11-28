import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ProductC from './components/ProductC';
import { ProductProvider } from './providers/product';

test('renders product list', () => {
  render(
    <ProductProvider>
      <ProductC />
    </ProductProvider>
  );

  const productName = screen.getByText(/Product Name/i);
  const editButton = screen.getByText(/Edit/i);

  fireEvent.click(editButton);

  const editInput = screen.getByLabelText(/Edit Product/i);
  fireEvent.change(editInput, { target: { value: 'New Product Name' } });


});
