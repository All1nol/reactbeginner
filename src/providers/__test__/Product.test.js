// __tests__/product.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extra matchers like toBeInTheDocument
import { ProductProvider, useProduct } from '../../providers/product'; // Update the path accordingly
import AppWithProviders from '../../App'; // Update the path accordingly
import AddProduct from '../../components/AddProduct/AddProduct'; // Update the path accordingly

// Mock the useProduct hook
jest.mock('../../providers/product', () => ({
  ...jest.requireActual('../../providers/product'), // Use the actual implementation for everything except useProduct
  useProduct: jest.fn(),
}));

describe('Product Provider', () => {
  it('renders AppWithProviders with AddProduct', () => {
    const { getByText } = render(
      <ProductProvider>
        <AppWithProviders />
      </ProductProvider>
    );

    expect(screen.getAllByAltText(''))
    expect(screen.getByText('Shopping List')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('calls addProduct when a new product is added', () => {
    useProduct.mockReturnValue({
      productList: [],
      addProduct: jest.fn(),
      deleteProduct: jest.fn(),
      editProduct: jest.fn(),
      handleEdit: jest.fn(),
    });

    const { getByLabelText, getByText } = render(
      <ProductProvider>
        <AddProduct />
      </ProductProvider>
    );

    fireEvent.change(screen.getByPlaceholderText('Enter a product'), { target: { value: 'New Product' } });
    fireEvent.click(screen.getByText('Add'));

    expect(useProduct().addProduct).toHaveBeenCalledWith({
      id: 'mocked-id',
      name: 'New Product',
    });
  });
});
