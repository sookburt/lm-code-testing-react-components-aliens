import { screen, render } from '@testing-library/react';
import SelectInput, {Props} from './SelectInput';

describe("Select Input", () => {

  test("That Select Label appears on page.", () => {
    const state: Props = {id: 'math_input', labelName: 'What is 2 + 2', selectedValue: '0', updateMethod: () => {} }
    render(<SelectInput 
      id={state.id} 
      labelName={state.labelName} 
      selectedValue={state.selectedValue} 
      updateMethod={state.updateMethod} />);
    const labelText = screen.getByText(/What is 2 \+ 2/i);
    expect(labelText).toBeInTheDocument();
  });

});
