export interface Props {
  planetName: string;
  updateMethod: (name:string) => void;
}

const PlanetNameInput: React.FC<Props> = ({planetName, updateMethod}) => {

  return (
    <>
      <label htmlFor='planetNameInput'>Planet Name:</label>
      <input type='text' id='planetNameInput' 
        value={planetName} 
        onChange ={ (e) => { updateMethod(e.target.value)} } />
    </>
  )

}

export default PlanetNameInput;