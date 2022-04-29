import { screen, render } from '@testing-library/react';
import { InputProps } from '../interfaces/InputInterface';
import TextInput from './TextInput';

describe("TextInput", () => {

  const renderInput = (state:InputProps) => {
    render(<TextInput 
      id={state.id} 
      labelName={state.labelName} 
      value={state.value} 
      updateMethod={state.updateMethod} />);
  }

  test("renders Planet Name input label", () => {
    const state: InputProps = {id: 'planet_name', labelName: 'Planet Name', value: 'Earth', updateMethod: () => {} }
    renderInput(state);
    const labelText = screen.getByText(/Planet Name/i);
    expect(labelText).toBeInTheDocument();
  });

  test("renders Species Name input label", () => {
    const state: InputProps = {id: 'species_name', labelName: 'Species Name', value: 'Human', updateMethod: () => {} }
    renderInput(state);
    const labelText = screen.getByText(/Species Name/i);
    expect(labelText).toBeInTheDocument();
  });

  test("renders Number of Beings input label", () => {
    const state: InputProps = {id: 'num_beings', labelName: 'Number Of Beings', value: '0', updateMethod: () => {} }
    renderInput(state);
    const labelText = screen.getByText(/Number Of Beings/i);
    expect(labelText).toBeInTheDocument();
  });

});
