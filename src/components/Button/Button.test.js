import { render, screen } from '@testing-library/react';
import Button from './';

test('renders Button', () => {
  
  render(<Button 
    text='Show' 
    onPress={() => {
      console.log('Button pressed')
    }}/>);

  const buttonElement = screen.getByText(/Show/i);
  expect(buttonElement).toBeInTheDocument();
  
});