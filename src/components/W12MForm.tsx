import { useState } from 'react';
import W12MHeader from './W12MHeader';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import TextAreaInput from './TextAreaInput';
import Button from './Button';
import { ErrorInterface } from '../interfaces/ErrorInterface';
import ValidationError from './ValidationError';


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

	const emptyError = { 'species': '', 'planet': '', 'beings': '', 'math': '', 'reason': '' };
	const [errorState, setErrorState] = useState<ErrorInterface>(emptyError);
	const validateForm = () => {

		const error =  { 'species': '', 'planet': '', 'beings': '', 'math': '', 'reason': '' };

		//TODO: handle validation.

		setErrorState(error);

		return true;
	}

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<section className='form--items'>
				<TextInput id={'species_name'} labelName={'Species Name:'} value={speciesNameState} updateMethod={ changeSpeciesName} />
				{errorState.species.length > 0 ?? <ValidationError errorMessage={errorState.species} />}
				<TextInput id={'planet_name'} labelName={'Planet Name:'} value={planetNameState} updateMethod={ changePlanetName} />
				{errorState.planet.length > 0 ?? <ValidationError errorMessage={errorState.planet} />}
				<TextInput id={'num_beings'} labelName={'Number o	f beings:'} value={numberOfBeingsState} updateMethod={ changeNumberOfBeings} />
				{errorState.beings.length > 0 ?? <ValidationError errorMessage={errorState.beings} />}
				<SelectInput id={'math_input'} labelName={'What is 2 + 2?'} value={mathState} updateMethod={ updateMathState } />
				{errorState.math.length > 0 ?? <ValidationError errorMessage={errorState.math} />}
				<TextAreaInput  id={'text_input'} labelName={'Reason for sparing:'} value={explainerState} updateMethod={ updateExplainerState } />
				{errorState.reason.length > 0 ?? <ValidationError errorMessage={errorState.reason} />}
				<Button clickHandler={validateForm} />
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