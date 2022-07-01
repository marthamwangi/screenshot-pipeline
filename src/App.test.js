import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('url navigates to google.com', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/go-google/i);
  expect(linkElement.href).toContain('google.com');
})
