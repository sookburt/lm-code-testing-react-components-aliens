import { screen, render } from "@testing-library/react";
import { InputProps } from "../interfaces/InputInterface";
import TextAreaInput from "./TextAreaInput";

describe("TextAreaInput",  () => {

  const renderInput = (state:InputProps) => {
    render(<TextAreaInput 
      id={state.id} 
      labelName={state.labelName} 
      value={state.value} 
      updateMethod={state.updateMethod} />);
  }

 test("renders text area input", () => {
  const state: InputProps = {id: 'text_input', labelName: 'Reason for sparing', value: '', updateMethod: jest.fn() }
  renderInput(state);
  const labelText = screen.getByText(/Reason for sparing/i);
  expect(labelText).toBeInTheDocument();
 });
});