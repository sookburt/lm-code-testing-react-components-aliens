import { useEffect, useState } from "react";
import { InputProps } from "../interfaces/InputInterface";
import ValidationError from "./ValidationError";

const BeingsInput: React.FC<InputProps> = ({id, labelName, value, updateFormState, formErrorState, updateFormErrorState}) => {

  const [localState, setLocalState] = useState<string>(value);
  const [localErrorState, setLocalErrorState] = useState<string>('');

  useEffect(() => {

    setLocalErrorState(validate());
    updateFormState(localState);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localState])

  useEffect(() => {

    updateFormErrorState(localErrorState==='');
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localErrorState]);

  // Numbers ONLY. Must be at least 1,000,000,000.
  const validate: () => string = () => {
    
    const numberOfBeings: number = parseInt(localState);

    let errorMessage =  isNaN(numberOfBeings) 
      ? 'ERROR: Only numbers are acceptable'
      : '';

    errorMessage = (numberOfBeings < 1000000000) 
      ? 'ERROR: The length of your species name must be greater than 1,000,000,000'
      : errorMessage;

    errorMessage = (/^[0-9]*$/.test(localState)) 
    ? errorMessage 
    : 'ERROR: Only the numbers are acceptable.';
    
    return errorMessage;
  }

  return (
    <>
    <section className="form--row">
      <label htmlFor={id} className='form--items'>{labelName}: </label>
      <input type='text' 
        id={id} 
        className='form--items'
        defaultValue={localState} 
        onChange ={ (e) => { 
          e.preventDefault();
          setLocalState(e.target.value)} 
        }></input>
        <ValidationError errorMessage={localErrorState} />
    </section>
    </>
  )
}

export default BeingsInput;