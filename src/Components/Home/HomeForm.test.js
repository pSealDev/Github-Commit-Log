import react from "react"
import HomeForm from './HomeForm';
import { screen, render, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect" 

// beforeEach(() => render(<HomeForm />));

test('loads and displays homeform',  () => {
    render(<HomeForm />)
  })

it('Validate if exists',  () => {
      waitFor(() => expect(screen.queryByTestId('form_test')).toBeInTheDocument());
});

 it('Validate if userName input box exists', () => {
      waitFor(() => expect(screen.queryByTestId('user-input')).toBeInTheDocument());
});

 it('Validate if repoName input box exists', () => {
     waitFor(() => expect(screen.queryByTestId('repo-input')).toBeInTheDocument());
});

 it('Validate if form button input box exists', () => {
      waitFor(() => expect(screen.queryByTestId('form-btn')).toBeInTheDocument());
});



 test('header renders correctly', () => {
  const component = render(<HomeForm />);
  let header_el;
   waitFor(() =>   header_el = screen.getByTestId('header'));
   waitFor(() => expect(header_el.textContent).toBe("Github API Commit Log"));
});

 test('form label renders correctly',  () => {
    const component = render(<HomeForm />);
    let label_el;
      waitFor(() =>   label_el = screen.getByTestId('form-label'));
     waitFor(() => expect(label_el.textContent).toBe("Enter Githubb User Name:"));
  });