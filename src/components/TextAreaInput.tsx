import { InputProps } from "../interfaces/InputInterface"

const TextAreaInput: React.FC<InputProps> = ({id, labelName, value, updateMethod}) => {

  return (
    <>
      <section className="form--row">
        <label htmlFor={id}>{labelName}: </label>
        <input type='text' id={id} 
          value={value} 
          onChange ={ (e) => { updateMethod(e.target.value)} } />
      </section>
    </>
  )
}

export default TextAreaInput;