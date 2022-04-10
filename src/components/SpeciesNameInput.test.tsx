import { screen, render, cleanup } from '@testing-library/react';
import SpeciesNameInput from './SpeciesNameInput';

describe("SpeciesNameInput", () => {

  beforeEach(() => {
    const state = {speciesName: 'human'}
    render(<SpeciesNameInput{...state}/>);
  });

  afterEach(() => {
    cleanup();
  })
  
  test('renders Species Name input label', () => {
    const labelText = screen.getByText(/Species Name/i);
    expect(labelText).toBeInTheDocument();
  });

})