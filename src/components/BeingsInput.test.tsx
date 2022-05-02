import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputProps } from '../interfaces/InputInterface';
import BeingsInput from './BeingsInput';

describe("BeingsInput", () => {

  const renderInput = (state:InputProps) => {
    render(<BeingsInput 
      id={state.id} 
      labelName={state.labelName} 
      value={state.value} 
      updateFormState={state.updateFormState}  
      formErrorState={state.formErrorState}  
      updateFormErrorState={state.updateFormErrorState} 
    />);
  }

  test("renders Species Name input label", () => {
    const state: InputProps = {id: 'num_beings', labelName: 'Number of beings', value: '0', updateFormState: () => {}, formErrorState: false, updateFormErrorState: () => {}  }
    renderInput(state);
    const labelText = screen.getByText(/Number of beings/i);
    expect(labelText).toBeInTheDocument();
  });

  test("renders input field and allows user to type", async () => {

    const updateStateMock = jest.fn();
    const updateErrorStateMock = jest.fn();

    const state: InputProps = {
        id: 'num_beings', 
        labelName: 'Number of beings', 
        value: '', 
        updateFormState: updateStateMock,
        formErrorState: false, 
        updateFormErrorState: updateErrorStateMock
      }
    renderInput(state);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const inputText = '200000000';
    const clickAndTypeLength = inputText.length+1;

    await userEvent.type(
      input, 
      inputText,
    );

    expect(input.value).toBe(inputText);
    expect(updateStateMock).toHaveBeenCalledTimes(clickAndTypeLength);
  });
});
