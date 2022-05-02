import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button",  () => {

 test("renders button", () => {

  const mockFunction = jest.fn(() => false);
  render(<Button clickHandler={mockFunction} isDisabled={false} />);
  
  const labelText = screen.getByText(/Submit form/i);
  expect(labelText).toBeInTheDocument();
 });

 test("calls validate method", () => {

  const mockFunction = jest.fn(() => false);
  render(<Button clickHandler={mockFunction} isDisabled={false} />);

  const submitButton = screen.getByRole('button');
  userEvent.click(submitButton);
  expect(mockFunction).toHaveBeenCalledTimes(1);
 });

});