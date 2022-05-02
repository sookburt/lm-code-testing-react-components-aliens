import { useEffect, useState } from "react";
import { InputProps } from "../interfaces/InputInterface";
import ValidationError from "./ValidationError";

const SpeciesNameInput: React.FC<InputProps> = ({id, labelName, value, updateFormState, formErrorState, updateErrorFormState}) => {

  const [localState, setLocalState] = useState<string>(value);
  const [localErrorState, setLocalErrorState] = useState<string>('');

  useEffect(() => {

    setLocalErrorState(validate());
    updateFormState(localState);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localState])

  useEffect(() => {

    updateErrorFormState(formErrorState && (localErrorState !== undefined)); 
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localErrorState]);

  // Must be between 3 and 23 characters. No numbers or special characters allowed!
  const validate: () => string = () => {

    const length = localState.length;
    let errorMessage = (length < 3 || length > 23) 
      ? 'The length of your species name must be between 3 and 23.'
      : '';

    errorMessage = /^[a-zA-Z\s]*$/.test(localState) 
      ? errorMessage 
      : 'Only the letters a-z are acceptable.';

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
          setLocalState(e.target.value)
        } 
        }></input>
        <ValidationError errorMessage={localErrorState} />
    </section>
    </>
  )
}

export default SpeciesNameInput;