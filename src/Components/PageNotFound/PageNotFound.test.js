import react from "react"
import PageNotFound from './PageNotFound';
import { screen, render, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect" 

// beforeEach(() => render(<PageNotFound />));

test('renders PageNotFound correct', async () => {
    render(<PageNotFound />)
  })


 test('h1 renders text correctly', async () => {
    const component = render(<PageNotFound />);
    let h1_el;
    await waitFor(() =>   h1_el = screen.getByTestId('pnf-h1'));
    await waitFor(() => expect(h1_el.textContent).toBe("error: page not found"));
  });