import { useEffect, useState } from "react";
import { InputProps } from "../interfaces/InputInterface";

const TextInput: React.FC<InputProps> = ({id, labelName, value, updateFormState}) => {

  const [localState, setLocalState] = useState<string>(value);

  useEffect(() => {
    updateFormState(localState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localState])

  return (
    <>
    <section className="form--row">
      <label htmlFor={id} className='form--items'>{labelName}: </label>
      <input type='text' 
        id={id} 
        className='form--items'
        value={localState} 
        onChange ={ (e) => {e.preventDefault(); setLocalState(e.currentTarget.value)} }></input>
    </section>
    </>
  )
}

export default TextInput;