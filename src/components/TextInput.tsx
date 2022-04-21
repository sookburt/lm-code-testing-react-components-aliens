export interface Props {
  id: string;
  labelName: string;
  value: string;
  updateMethod: (name:string) => void;
}

const TextInput: React.FC<Props> = ({id, labelName, value, updateMethod}) => {

  return (
    <>
      <label htmlFor={id}>{labelName}: </label>
      <input type='text' id={id} 
        value={value} 
        onChange ={ (e) => { updateMethod(e.target.value)} } />
    </>
  )

}

export default TextInput;