import { useEffect, useState } from "react";
import { InputProps } from "../interfaces/InputInterface";
import ValidationError from "./ValidationError";

const PlanetNameInput: React.FC<InputProps> = ({id, labelName, value, updateFormState, formErrorState, updateFormErrorState}) => {

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

  // Must be between 2 and 49 characters. Numbers are allowed, but no special characters.
  const validate: () => string = () => {

    const length = localState.length;
    let errorMessage = (length < 2 || length > 49) 
      ? 'The length of your planet name must be between 2 and 49.'
      : '';

    errorMessage = /^[a-zA-Z0-9\s]*$/.test(localState) 
      ? errorMessage 
      : 'Only the letters a-z, spaces and numbers are acceptable.';

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

export default PlanetNameInput;