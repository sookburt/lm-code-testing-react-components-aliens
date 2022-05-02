import { useEffect, useState } from "react";
import { InputProps } from "../interfaces/InputInterface"
import ValidationError from "./ValidationError";

const TextAreaInput: React.FC<InputProps> = ({id, labelName, value, updateFormState, formErrorState, updateFormErrorState}) => {

  const [localState, setLocalState] = useState<string>(value);
  const [localErrorState, setLocalErrorState] = useState<string>('');

  useEffect(() => {

    setLocalErrorState(validate());
    updateFormState(localState);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localState]);

  useEffect(() => {

    updateFormErrorState(localErrorState===''); 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localErrorState]);

  // Must be between 17 and 153 characters.
  const validate: () => string = () => {

    const length = localState.length;
    let errorMessage = (length < 17 || length > 153) 
      ? 'ERROR: Your reason must be between 17 and 153 characters.'
      : '';

    return errorMessage;
  }

  return (
    <>
      <section className="form--row">
        <label className='form--items' htmlFor={id}>{labelName}: </label>
        <textarea id={id} className='form--items' 
          defaultValue={value} 
          onChange ={ (e) => { 
            e.preventDefault();
            setLocalState(e.target.value)} 
          }>
        </textarea>
        <ValidationError errorMessage={localErrorState} />
      </section>
    </>
  )
}

export default TextAreaInput;