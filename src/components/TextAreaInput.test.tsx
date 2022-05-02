import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputProps } from "../interfaces/InputInterface";
import TextAreaInput from "./TextAreaInput";

describe("TextAreaInput",  () => {

  const renderInput = (state:InputProps) => {

    render(<TextAreaInput 
      id={state.id} 
      labelName={state.labelName} 
      value={state.value} 
      updateFormState={state.updateFormState} 
      formErrorState={state.formErrorState}  
      updateFormErrorState={state.updateFormErrorState} 
      />);
  }

 test("renders text area input", () => {

  const formStateMock = jest.fn();
  const formErrorStateMock = jest.fn();
  
  const state: InputProps = {
    id: 'text_input', 
    labelName: 'Reason for sparing', 
    value: 'Because we has art innit!', 
    updateFormState: formStateMock,
    formErrorState: false,
    updateFormErrorState: formErrorStateMock,
  }
  
  renderInput(state);
  
  const labelText = screen.getByText(/Reason for sparing/i);
  expect(labelText).toBeInTheDocument();
  
  const inputValue = screen.getByDisplayValue(/Because we has art innit!/i);
  expect(inputValue).toBeInTheDocument();
  
  const inputString = 'Happy!';
  userEvent.type(inputValue, inputString);
  expect(formStateMock).toBeCalledTimes(inputString.length+1);
  });
});