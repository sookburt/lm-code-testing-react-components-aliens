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
      updateMethod={state.updateMethod} />);
  }

  test("That appears and behaves correctly.", async() => {

    const mock = jest.fn();

    const state: InputProps = {
      id: 'math_input', 
      labelName: 'What is 2 + 2?', 
      value: '0', 
      updateMethod: mock 
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
    
    expect((screen.getByRole('option', { name: /Not 4/i }) as HTMLOptionElement).selected).toBe(true); // failing
    expect(mock).toHaveBeenCalled();

  });

});
