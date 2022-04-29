import { useState } from 'react';
import W12MHeader from './W12MHeader';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import TextAreaInput from './TextAreaInput';
import Button from './Button';


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

	const [explainerState, setExplainerState] = useState<string>(''); 
	const updateExplainerState = (inputText: string) => {
		setExplainerState(inputText);
	}

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<section className='form--items'>
				<TextInput id={'species_name'} labelName={'Species Name:'} value={speciesNameState} updateMethod={ changeSpeciesName} />
				<TextInput id={'planet_name'} labelName={'Planet Name:'} value={planetNameState} updateMethod={ changePlanetName} />
				<TextInput id={'num_beings'} labelName={'Number o	f beings:'} value={numberOfBeingsState} updateMethod={ changeNumberOfBeings} />
				<SelectInput id={'math_input'} labelName={'What is 2 + 2?'} value={mathState} updateMethod={ updateMathState } />
				<TextAreaInput  id={'text_input'} labelName={'Reason for sparing:'} value={explainerState} updateMethod={ updateExplainerState } />
				<Button />
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