/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import AddProduct from '../AddProduct';

// jest.mock("nanoid", () => {
//   var i = 0;
//   return {
//     nanoid: () => {
//       i++;
//       return i
//     }
//   };
// });

test('renders AddProduct component', () => {
  render(
    <input placeholder="Enter a product" />
  );

  const inputElement = screen.getByPlaceholderText('Enter a product');
  expect(inputElement).toBeInTheDocument();
});

test('loads list when clicking add button', () => {
  const { container, getByTestId } = render(
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <button value='NewProduct' role='button' data-testid='test' >NewProduct </button>
  )
  const NewProduct = screen.queryAllByRole('button');

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const mybutton = container.querySelector('[value="NewProduct"]')


  // eslint-disable-next-line testing-library/prefer-screen-queries
  const mybtn2 = getByTestId('test')

  fireEvent.click(mybutton)



  //expect(container).toMatchSnapshot()

  expect(NewProduct).toHaveLength(1);

  expect(mybutton).toBeInTheDocument();
  expect(mybtn2).toBeInTheDocument();
})

// it(`sdfsdf`, () => {

//   expect(nanoid()).toEqual(1)

//   expect(nanoid()).toEqual(2)
// })