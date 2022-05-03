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

  test("renders Error message if too few characters are added", () => {
    const state: InputProps = {id: 'text_input', labelName: 'Reason for sparing', value: 'Hi', updateFormState: () => {}, formErrorState: false, updateFormErrorState: () => {}  }
    renderInput(state);
    const errorMessage = screen.getByText(/ERROR:/i);
    expect(errorMessage).toHaveTextContent('ERROR: Your reason must be between 17 and 153 characters.');
  });

  test("renders Error message if too many characters are added", () => {
    const state: InputProps = {id: 'text_input', labelName: 'Reason for sparing', value: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', updateFormState: () => {}, formErrorState: false, updateFormErrorState: () => {}  }
    renderInput(state);
    const errorMessage = screen.getByText(/ERROR:/i);
    expect(errorMessage).toHaveTextContent('ERROR: Your reason must be between 17 and 153 characters.');
  });

  test("renders no error message if correct number of characters are added", () => {
    const state: InputProps = {id: 'text_input', labelName: 'Reason for sparing', value: 'Sed ut perspiciatis unde omnis iste', updateFormState: () => {}, formErrorState: false, updateFormErrorState: () => {}  }
    renderInput(state);
    expect(() => {screen.getByText(/ERROR:/i)}).toThrow();
  });

});