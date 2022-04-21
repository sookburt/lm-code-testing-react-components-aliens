import { screen, render, cleanup } from '@testing-library/react';
import SpeciesNameInput, {Props} from './SpeciesNameInput';

describe("SpeciesNameInput", () => {

  beforeEach(() => {
    const state:Props = {speciesName: 'Human', updateMethod: () => {}}
    render(<SpeciesNameInput speciesName={state.speciesName} updateMethod={state.updateMethod}/>);
  });

  afterEach(() => {
    cleanup();
  })
  
  test('renders Species Name input label', () => {
    const labelText = screen.getByText(/Species Name/i);
    expect(labelText).toBeInTheDocument();
  });

})