import react from "react"
import Results from './Results';
import { screen, render, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect" 


it('Validate if results-div exists', () => {
    waitFor(() => expect(screen.queryByTestId('results-div')).toBeInTheDocument());
});