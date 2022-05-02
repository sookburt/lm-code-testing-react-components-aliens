import { useEffect, useState } from "react";
import { InputProps } from "../interfaces/InputInterface";
import ValidationError from "./ValidationError";

const SelectInput: React.FC<InputProps> = ({id, labelName, value, updateFormState, formErrorState, updateErrorFormState}) => {

  const [localState, setLocalState] = useState<string>(value);
  const [localErrorState, setLocalErrorState] = useState<string>('');

  useEffect(() => {

    setLocalErrorState(validate());
    updateFormState(localState);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localState])

  useEffect(() => {

    updateErrorFormState(localErrorState===''); 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localErrorState]);

  //  "4" must be selected. Selecting "Not 4" should display an error.
  const validate: () => string = () => {

    let errorMessage = (localState === 'Not 4') 
      ? 'This is not correct... your planet is doomed!'
      : '';

    return errorMessage;
  }

  return (
    <>
    <section className="form--row">
      <label htmlFor={id} className='form--items'>{labelName}: </label>
      <select 
        id={id} 
        className='form--items'
        defaultValue={value}
        onChange ={ (e) => { 
          e.preventDefault();
          setLocalState(e.target.value)}
        }>
          <option value='0'>Select...</option>
          <option value='4'>4</option>
          <option value='Not 4'>Not 4</option>
      </select>
      <ValidationError errorMessage={localErrorState} />
    </section>
    </>
  )
}

export default SelectInput;