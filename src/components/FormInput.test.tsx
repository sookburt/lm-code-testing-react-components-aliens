import { screen, render } from '@testing-library/react';
import FormInput, {Props} from './FormInput';

describe("FormInput", () => {

  test("renders Planet Name input label", () => {
    const state:Props = {id: 'planet_name', labelName: 'Planet Name', value: 'Earth', updateMethod: () => {} }
    render(<FormInput 
      id={state.id} 
      labelName={state.labelName} 
      value={state.value} 
      updateMethod={state.updateMethod} />);
    const labelText = screen.getByText(/Planet Name/i);
    expect(labelText).toBeInTheDocument();
  });

  test("renders Species Name input label", () => {
    const state:Props = {id: 'species_name', labelName: 'Species Name', value: 'Human', updateMethod: () => {} }
    render(<FormInput 
      id={state.id} 
      labelName={state.labelName} 
      value={state.value} 
      updateMethod={state.updateMethod} />);
    const labelText = screen.getByText(/Species Name/i);
    expect(labelText).toBeInTheDocument();
  });

});
