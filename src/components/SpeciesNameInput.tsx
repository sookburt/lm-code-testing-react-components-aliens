
interface Props {
  speciesName: string;
}

const SpeciesNameInput:React.FC<Props> = ({speciesName}) => {

  return (
    <>
      <label htmlFor='speciesName'>Species Name:</label>
      <input id='speciesName' type='text' value={ speciesName } />
    </>
  );
}

export default SpeciesNameInput;