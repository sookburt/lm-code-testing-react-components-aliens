import { screen, render } from '@testing-library/react';
import { InputProps } from '../interfaces/InputInterface';
import SelectInput from './SelectInput';

describe("Select Input", () => {

  test("That Select Label appears on page.", () => {
    const state: InputProps = {id: 'math_input', labelName: 'What is 2 + 2', value: '0', updateMethod: () => {} }
    render(<SelectInput 
      id={state.id} 
      labelName={state.labelName} 
      value={state.value} 
      updateMethod={state.updateMethod} />);
    const labelText = screen.getByText(/What is 2 \+ 2/i);
    expect(labelText).toBeInTheDocument();
  });

});
