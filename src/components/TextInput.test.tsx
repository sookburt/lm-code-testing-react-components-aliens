import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputProps } from '../interfaces/InputInterface';
import TextInput from './BeingsInput';

describe("TextInput", () => {

  const renderInput = (state:InputProps) => {
    render(<TextInput 
      id={state.id} 
      labelName={state.labelName} 
      value={state.value} 
      updateFormState={state.updateFormState} />);
  }

  test("renders Planet Name input label", () => {
    const state: InputProps = {id: 'planet_name', labelName: 'Planet Name', value: 'Earth', updateFormState: () => {} }
    renderInput(state);
    const labelText = screen.getByText(/Planet Name/i);
    expect(labelText).toBeInTheDocument();
  });

  test("renders Species Name input label", () => {
    const state: InputProps = {id: 'species_name', labelName: 'Species Name', value: 'Human', updateFormState: () => {} }
    renderInput(state);
    const labelText = screen.getByText(/Species Name/i);
    expect(labelText).toBeInTheDocument();
  });

  test("renders input field and allows user to type", async () => {

    const mock = jest.fn();

    const state: InputProps = {
        id: 'num_beings', 
        labelName: 'Number Of Beings', 
        value: '', 
        updateFormState: mock,
      }
    renderInput(state);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const inputText = '200,000,000,000';
    const clickAndTypeLength = inputText.length+1;

    await userEvent.type(
      input, 
      inputText,
    );

    expect(input.value).toBe(inputText);
    expect(mock).toHaveBeenCalledTimes(clickAndTypeLength);
  });
});
