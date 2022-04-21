export interface Props {
  id: string;
  labelName: string;
  selectedValue: string;
  updateMethod: (value: string) => void;
}

const SelectInput: React.FC<Props> = ({id, labelName, selectedValue, updateMethod}) => {

  return (
    <>
    <section className="form--row">
      <label htmlFor={id}>{labelName}: </label>
      <select 
        id={id} 
        defaultValue={selectedValue}
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