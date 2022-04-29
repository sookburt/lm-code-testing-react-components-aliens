import { InputProps } from "../interfaces/InputInterface";

const TextInput: React.FC<InputProps> = ({id, labelName, value, updateMethod}) => {

  return (
    <>
    <section className="form--row">
      <label htmlFor={id} className='form--items'>{labelName}: </label>
      <input type='text' id={id} 
       className='form--items'
        value={value} 
        onChange ={ (e) => { updateMethod(e.target.value)} } />
    </section>
    </>
  )
}

export default TextInput;