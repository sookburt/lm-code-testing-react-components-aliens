import { screen, render } from "@testing-library/react";
import { ValidationInterface } from "../interfaces/ValidationInterface";
import ValidationError from "./ValidationError";

describe("ValidationError",  () => {

  const renderInput = (state: ValidationInterface) => {
    render(<ValidationError  
      errorMessage={state.errorMessage} />);
  }

  test("renders validation error", () => {
    const state: ValidationInterface = {errorMessage: 'There was an error'}
    renderInput(state);
    const tag = screen.getByText('There was an error');
    expect(tag).toBeInTheDocument();
  });
});