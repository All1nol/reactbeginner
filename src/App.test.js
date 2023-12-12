import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders product list', () => {
  render(
      <App title="Shopping List" />
  );
    
 const listElement = screen.getByText("Shopping List");
 expect(listElement).toBeInTheDocument();
});
