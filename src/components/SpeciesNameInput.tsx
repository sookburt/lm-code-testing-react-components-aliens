export interface Props {
  speciesName: string;
  updateMethod: (name:string) => void;
}

const SpeciesNameInput:React.FC<Props> = ({speciesName, updateMethod}) => {

  return (
    <>
      <label htmlFor='speciesName'>Species Name:</label>
      <input id='speciesName' type='text' value={ speciesName } onChange={(e) => { updateMethod(e.target.value) }} />
    </>
  );
}

export default SpeciesNameInput;