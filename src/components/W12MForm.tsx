import { useState } from 'react';
import W12MHeader from './W12MHeader';
import TextInput from './TextInput';


const W12MForm = () => {

	const [speciesNameState, setSpeciesNameState] = useState<string>('Human');
	const changeSpeciesName = (name: string) => {
		setSpeciesNameState(name);
	}
	const [planetNameState, setPlanetNameState] = useState<string>('Earth');
	const changePlanetName = (planetName: string) => {
		setPlanetNameState(planetName);
	}
	
	const [numberOfBeingsState, setNumberOfBeingsState] = useState<string>('0');
	const changeNumberOfBeings = (numberOfBeings: string) => {
		setNumberOfBeingsState(numberOfBeings);
	}

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<TextInput id={'species_name'} labelName={'Species Name'} value={speciesNameState} updateMethod={ changeSpeciesName} />
			<TextInput id={'planet_name'} labelName={'Planet Name'} value={planetNameState} updateMethod={ changePlanetName} />
			<TextInput id={'num_beings'} labelName={'Number Of Beings'} value={numberOfBeingsState} updateMethod={ changeNumberOfBeings} />

		</section>
	);
};

export default W12MForm;
