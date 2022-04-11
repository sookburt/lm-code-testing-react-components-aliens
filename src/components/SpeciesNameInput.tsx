
import SpeciesNameProps from './SpeciesNameProps';

const SpeciesNameInput:React.FC<SpeciesNameProps> = ({speciesName}) => {

  return (
    <>
      <label htmlFor='speciesName'>Species Name:</label>
      <input id='speciesName' type='text' value={ speciesName } />
    </>
  );
}

export default SpeciesNameInput;