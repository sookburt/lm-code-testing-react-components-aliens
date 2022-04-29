import { screen, render } from "@testing-library/react";
import Button from "./Button";

describe("Button",  () => {

 test("renders button", () => {

  const mockFunction = jest.fn(() => false);
  render(<Button clickHandler={mockFunction}/>)
  const labelText = screen.getByText(/Submit form/i);
  expect(labelText).toBeInTheDocument();
 });

});