import { screen, render } from '@testing-library/react';
import TextInput, {Props} from './TextInput';

describe("TextInput", () => {

  test("renders Planet Name input label", () => {
    const state:Props = {id: 'planet_name', labelName: 'Planet Name', value: 'Earth', updateMethod: () => {} }
    render(<TextInput 
      id={state.id} 
      labelName={state.labelName} 
      value={state.value} 
      updateMethod={state.updateMethod} />);
    const labelText = screen.getByText(/Planet Name/i);
    expect(labelText).toBeInTheDocument();
  });

  test("renders Species Name input label", () => {
    const state:Props = {id: 'species_name', labelName: 'Species Name', value: 'Human', updateMethod: () => {} }
    render(<TextInput 
      id={state.id} 
      labelName={state.labelName} 
      value={state.value} 
      updateMethod={state.updateMethod} />);
    const labelText = screen.getByText(/Species Name/i);
    expect(labelText).toBeInTheDocument();
  });

  test("renders Number of Beings input label", () => {
    const state:Props = {id: 'num_beings', labelName: 'Number Of Beings', value: '0', updateMethod: () => {} }
    render(<TextInput 
      id={state.id} 
      labelName={state.labelName} 
      value={state.value} 
      updateMethod={state.updateMethod} />);
    const labelText = screen.getByText(/Number Of Beings/i);
    expect(labelText).toBeInTheDocument();
  });

});
