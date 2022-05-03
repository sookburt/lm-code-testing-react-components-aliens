import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputProps } from '../interfaces/InputInterface';
import SelectInput from './SelectInput';

describe("Select Input", () => {

  const renderInput = (state:InputProps) => {

    render(<SelectInput 
      id={state.id} 
      labelName={state.labelName} 
      value={state.value} 
      updateFormState={state.updateFormState}
      formErrorState={state.formErrorState}  
      updateFormErrorState={state.updateFormErrorState} 
    />);
  }

  test("That appears and behaves correctly.", async() => {

    const formStateMock = jest.fn();
    const formErrorStateMock = jest.fn();

    const state: InputProps = {
      id: 'math_input', 
      labelName: 'What is 2 + 2?', 
      value: '0', 
      updateFormState: formStateMock, 
      formErrorState: false, 
      updateFormErrorState: formErrorStateMock,
    }
    renderInput(state);

    const tag = screen.getByText(/What is 2 \+ 2/i);
    expect(tag).toBeInTheDocument();
    
    const value = screen.getByDisplayValue('Select...');
    expect(value).toBeInTheDocument();

    expect(screen.getByRole('combobox')).toHaveLength(3)

    await userEvent.selectOptions(
        screen.getByRole('combobox'), 
        screen.getByRole('option', { name: 'Not 4'}),
      );
    
    expect((screen.getByRole('option', { name: /Not 4/i }) as HTMLOptionElement).selected).toBe(true); 
    expect(formStateMock).toHaveBeenCalled();
  });

  test("renders Error message if 'Not 4' is selected", async() => {
    const state: InputProps = {id: 'math_input', labelName: 'What is 2 + 2?', value: '0', updateFormState: () => {}, formErrorState: false, updateFormErrorState: () => {}  }
    renderInput(state);

    await userEvent.selectOptions(
      screen.getByRole('combobox'), 
      screen.getByRole('option', { name: 'Not 4'}),
    );
    const errorMessage = screen.getByText(/ERROR:/i);
    expect(errorMessage).toHaveTextContent('ERROR: This is not correct... your planet is doomed!');
  });

  test("renders no error message if correct option chosen", async() => {
    const state: InputProps = {id: 'math_input', labelName: 'What is 2 + 2?', value: '0', updateFormState: () => {}, formErrorState: false, updateFormErrorState: () => {}  }
    renderInput(state);
    await userEvent.selectOptions(
      screen.getByRole('combobox'), 
      screen.getByRole('option', { name: '4'}),
    );
    expect(() => {screen.getByText(/ERROR:/i)}).toThrow();
  });

});
