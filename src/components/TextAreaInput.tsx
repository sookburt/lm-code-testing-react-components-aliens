import { InputProps } from "../interfaces/InputInterface"

const TextAreaInput: React.FC<InputProps> = ({id, labelName, value, updateMethod}) => {

  return (
    <>
      <section className="form--row">
        <label className='form--items' htmlFor={id}>{labelName}: </label>
        <textarea id={id} className='form--items' 
          value={value} 
          onChange ={ (e) => { updateMethod(e.target.value)} }>
            
        </textarea>
      </section>
    </>
  )
}

export default TextAreaInput;