import { useEffect, useState } from "react";
import { InputProps } from "../interfaces/InputInterface"

const TextAreaInput: React.FC<InputProps> = ({id, labelName, value, updateFormState}) => {

  const [localState, setLocalState] = useState<string>(value);

  useEffect(() => {
    updateFormState(localState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localState])

  return (
    <>
      <section className="form--row">
        <label className='form--items' htmlFor={id}>{labelName}: </label>
        <textarea id={id} className='form--items' 
          value={value} 
          onChange ={ (e) => { setLocalState(e.target.value)} }>
        </textarea>
      </section>
    </>
  )
}

export default TextAreaInput;