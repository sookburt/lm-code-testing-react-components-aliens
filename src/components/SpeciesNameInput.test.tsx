import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputProps } from '../interfaces/InputInterface';
import SpeciesNameInput from './SpeciesNameInput';

describe("SpeciesNameInput", () => {

  const renderInput = (state:InputProps) => {
    render(<SpeciesNameInput 
      id={state.id} 
      labelName={state.labelName} 
      value={state.value} 
      updateFormState={state.updateFormState}  
      formErrorState={state.formErrorState}  
      updateFormErrorState={state.updateFormErrorState} 
    />);
  }


  test("renders Species Name input label", () => {
    const state: InputProps = {id: 'species_name', labelName: 'Species Name', value: 'Human', updateFormState: () => {}, formErrorState: false, updateFormErrorState: () => {}  }
    renderInput(state);
    const labelText = screen.getByText(/Species Name/i);
    expect(labelText).toBeInTheDocument();
  });

  test("renders input field and allows user to type", async () => {

    const updateStateMock = jest.fn();
    const updateErrorStateMock = jest.fn();

    const state: InputProps = { 
        id: 'species_name', 
        labelName: 'SpeciesName', 
        value: '', 
        updateFormState: updateStateMock,
        formErrorState: false, 
        updateFormErrorState: updateErrorStateMock
      }
    renderInput(state);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const inputText = 'Human';
    const clickAndTypeLength = inputText.length+1;

    await userEvent.type(
      input, 
      inputText,
    );

    expect(input.value).toBe(inputText);
    expect(updateStateMock).toHaveBeenCalledTimes(clickAndTypeLength);
  });

  test("renders Error message if number of characters is too low", () => {
    const state: InputProps = {id: 'species_name', labelName: 'Species Name', value: 'H', updateFormState: () => {}, formErrorState: false, updateFormErrorState: () => {}  }
    renderInput(state);
    const errorMessage = screen.getByText(/ERROR:/i);
    expect(errorMessage).toHaveTextContent('ERROR: The length of your species name must be between 3 and 23.');
  });

  test("renders Error message if number of characters is too high", () => {
    const state: InputProps = {id: 'species_name', labelName: 'Species Name', value: 'Huuuuummmmmmaaaaaaaannnnnn', updateFormState: () => {}, formErrorState: false, updateFormErrorState: () => {}  }
    renderInput(state);
    const errorMessage = screen.getByText(/ERROR:/i);
    expect(errorMessage).toHaveTextContent('ERROR: The length of your species name must be between 3 and 23.');
  });

  test("renders Error message if numbers are added", () => {
    const state: InputProps = {id: 'species_name', labelName: 'Species Name', value: '333', updateFormState: () => {}, formErrorState: false, updateFormErrorState: () => {}  }
    renderInput(state);
    const errorMessage = screen.getByText(/ERROR:/i);
    expect(errorMessage).toHaveTextContent('ERROR: Only the letters a-z are acceptable.');
  });

  test("renders Error message if special characters are added", () => {
    const state: InputProps = {id: 'species_name', labelName: 'Species Name', value: '#*', updateFormState: () => {}, formErrorState: false, updateFormErrorState: () => {}  }
    renderInput(state);
    const errorMessage = screen.getByText(/ERROR:/i);
    expect(errorMessage).toHaveTextContent('ERROR: Only the letters a-z are acceptable.');
  });

  test("renders no error message if correct number of letters added", () => {
    const state: InputProps = {id: 'species_name', labelName: 'Species Name', value: 'Human', updateFormState: () => {}, formErrorState: false, updateFormErrorState: () => {}  }
    renderInput(state);
    expect(() => {screen.getByText(/ERROR:/i)}).toThrow();
  });

});
