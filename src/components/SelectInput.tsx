import { InputProps } from "../interfaces/InputInterface";

const SelectInput: React.FC<InputProps> = ({id, labelName, value, updateMethod}) => {

  return (
    <>
    <section className="form--row">
      <label htmlFor={id} className='form--items'>{labelName}: </label>
      <select 
        id={id} 
        className='form--items'
        defaultValue={value}
        onChange ={ (e) => { updateMethod(e.target.value)} }>
          <option value='0'>Select...</option>
          <option value='4'>4</option>
          <option value='Not 4'>Not 4</option>
      </select>
    </section>
    </>
  )
}

export default SelectInput;