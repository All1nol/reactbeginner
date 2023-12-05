import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductProvider } from '../../../providers/product';
import AddProduct from '../AddProduct';

test('renders product list', () => {
  render(
    <ProductProvider>
      <AddProduct title="Product List" />
    </ProductProvider>
  );
    
 const listElement = screen.getByText("product list");
 expect(listElement).toBeInTheDocument();
});
