interface Props {
  planetName: string;
  //onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlanetNameInput: React.FC<Props> = ({planetName}) => {

  return (
    <>
      <label htmlFor='planetNameInput'>Planet Name:</label>
      <input type='text' id='planetNameInput' value={planetName} />
    </>
  )

}

export default PlanetNameInput;