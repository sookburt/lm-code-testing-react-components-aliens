import { useEffect, useState } from "react";
import { InputProps } from "../interfaces/InputInterface";

const SelectInput: React.FC<InputProps> = ({id, labelName, value, updateFormState}) => {

  const [localState, setLocalState] = useState<string>(value);

  useEffect(() => {
    updateFormState(localState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localState])

  return (
    <>
    <section className="form--row">
      <label htmlFor={id} className='form--items'>{labelName}: </label>
      <select 
        id={id} 
        className='form--items'
        defaultValue={value}
        onChange ={ (e) => { setLocalState(e.target.value)} }>
          <option value='0'>Select...</option>
          <option value='4'>4</option>
          <option value='Not 4'>Not 4</option>
      </select>
    </section>
    </>
  )
}

export default SelectInput;