import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputProps } from '../interfaces/InputInterface';
import PlanetNameInput from './PlanetNameInput';

describe("PlanetNameInput", () => {

  const renderInput = (state:InputProps) => {
    render(<PlanetNameInput 
      id={state.id} 
      labelName={state.labelName} 
      value={state.value} 
      updateFormState={state.updateFormState}  
      formErrorState={state.formErrorState}  
      updateFormErrorState={state.updateFormErrorState} 
    />);
  }

  test("renders Planet Name input label", () => {
    const state: InputProps = {id: 'planet_name', labelName: 'Planet Name', value: 'Earth', updateFormState: () => {}, formErrorState: false, updateFormErrorState: () => {}  }
    renderInput(state);
    const labelText = screen.getByText(/Planet Name/i);
    expect(labelText).toBeInTheDocument();
  });

  test("renders input field and allows user to type", async () => {

    const updateStateMock = jest.fn();
    const updateErrorStateMock = jest.fn();

    const state: InputProps = {
        id: 'planet_name', 
        labelName: 'PlanetName', 
        value: '', 
        updateFormState: updateStateMock,
        formErrorState: false, 
        updateFormErrorState: updateErrorStateMock
      }
    renderInput(state);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const inputText = 'Earth';
    const clickAndTypeLength = inputText.length+1;

    await userEvent.type(
      input, 
      inputText,
    );

    expect(input.value).toBe(inputText);
    expect(updateStateMock).toHaveBeenCalledTimes(clickAndTypeLength);
  });
});
