import { useState } from 'react';
import W12MHeader from './W12MHeader';
import FormInput from './FormInput';


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
			<FormInput id={'species_name'} labelName={'Species Name'} value={speciesNameState} updateMethod={ changeSpeciesName} />
			<FormInput id={'planet_name'} labelName={'Planet Name'} value={planetNameState} updateMethod={ changePlanetName} />

		</section>
	);
};

export default W12MForm;
