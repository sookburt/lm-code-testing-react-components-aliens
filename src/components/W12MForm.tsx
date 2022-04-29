import { useState } from 'react';
import W12MHeader from './W12MHeader';
import TextInput from './TextInput';
import SelectInput from './SelectInput';


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

	const [mathState, setMathState] = useState<string>('0');
	const updateMathState = (mathSelection: string) => {
		setMathState(mathSelection);
	}

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<section className='form--items'>
				<TextInput id={'species_name'} labelName={'Species Name'} value={speciesNameState} updateMethod={ changeSpeciesName} />
				<TextInput id={'planet_name'} labelName={'Planet Name'} value={planetNameState} updateMethod={ changePlanetName} />
				<TextInput id={'num_beings'} labelName={'Number Of Beings'} value={numberOfBeingsState} updateMethod={ changeNumberOfBeings} />
				<SelectInput id={'math_input'} labelName={'What is 2 + 2'} selectedValue={mathState} updateMethod={ updateMathState } />
				
			</section>
		</section>
	);
};

export default W12MForm;

/* 
Useful docs to use for testing.
	https://testing-library.com/docs/example-input-event 
	https://react-testing-library-examples.netlify.app/
	https://testing-playground.com/
*/