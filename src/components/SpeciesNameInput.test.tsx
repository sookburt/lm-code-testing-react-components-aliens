import { screen, render } from '@testing-library/react';
import SpeciesNameInput from './SpeciesNameInput';

describe("SpeciesNameInput", () => {

  beforeEach(() => {
    const state = {speciesName: 'human'}
    render(<SpeciesNameInput speciesName= {state.speciesName}/>);
  });
  
  test('renders Species Name input label', () => {
    const labelText = screen.getByText(/Species Name/i);
    expect(labelText).toBeInTheDocument();
  });
  
  // test('renders Species Name input label', () => {
  //   const labelText = screen.getByText(/Species Name/i);
  //   expect(labelText).toBeInTheDocument();
  // });
})