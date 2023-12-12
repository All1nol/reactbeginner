/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import AddProduct from '../AddProduct';
// import AddProduct from '../AddProduct';

test('renders AddProduct component', () => {
  render(
      <input placeholder="Enter a product" />
  );

  const inputElement = screen.getByPlaceholderText('Enter a product');
  expect(inputElement).toBeInTheDocument();
});

test('loads list when clicking add button', () =>{
  render(
    <button value='NewProduct'/>
  )
  const NewProduct = screen.findByDisplayValue('NewProduct');
  expect(NewProduct).toBeInTheDocument();
})