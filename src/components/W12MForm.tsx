import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesNameInput from './SpeciesNameInput';
import PlanetNameInput from './PlanetNameInput';


const W12MForm = () => {

	const [speciesNameState, setSpeciesNameState] = useState<string>('Human');
	const changeSpeciesName = (name: string) => {
		setSpeciesNameState(name);
	}
	const [planetNameState, setPlanetNameState] = useState<string>('Earth');
	const changePlanetName = (planetName: string) => {
		setPlanetNameState(planetName);
	}

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesNameInput speciesName={speciesNameState} updateMethod={changeSpeciesName} />
			<PlanetNameInput planetName={planetNameState} updateMethod={ changePlanetName} />

		</section>
	);
};

export default W12MForm;
