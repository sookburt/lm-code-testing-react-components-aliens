import { useState } from 'react';
import W12MHeader from './W12MHeader';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import TextAreaInput from './TextAreaInput';
import Button from './Button';
import { ErrorInterface } from '../interfaces/ErrorInterface';
import ValidationError from './ValidationError';
import { RecordInterface } from '../interfaces/RecordInterface';


const W12MForm = () => {

	const [speciesNameState, setSpeciesNameState] = useState<string>('');
	const changeSpeciesName = (name:string) => {
		setSpeciesNameState(name);
	}
	
	const [planetNameState, setPlanetNameState] = useState<string>('');
	const changePlanetName = (name:string) => {
		setPlanetNameState(name);
	}
	
	const [numberOfBeingsState, setNumberOfBeingsState] = useState<string>('0');
	const changeNumberOfBeings = (name:string) => {
		setNumberOfBeingsState(name);
	}

	const [mathState, setMathState] = useState<string>('');
	const updateMathState = (name:string) => {
		setMathState(name);
	}

	const [explainerState, setExplainerState] = useState<string>(''); 
	const updateExplainerState = (name: string) => {
		setExplainerState(name);
	}

	const emptyError = { 'species': '', 'planet': '', 'beings': '', 'math': '', 'reason': '' };
	const [errorState, setErrorState] = useState<ErrorInterface>(emptyError);
	const isFormValid = () => {
		console.log('inside isFormValid');

		const error =  { 'species': '', 'planet': '', 'beings': '', 'math': '', 'reason': '' };

		let isValid:boolean = true;

		//TODO: handle validation.

		if(!isValid){
			setErrorState(error);
			return false;
		} 
		const record:RecordInterface = buildRecord();
		console.log(record);
		return true;
	}

	const buildRecord = () => {
		return ({
			species: speciesNameState,
			planet: planetNameState,
			beings: numberOfBeingsState,
			math: mathState,
			reason: explainerState
		});
	}

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<section className='form--items'>
				<TextInput id={'species_name'} labelName={'Species Name'} value={speciesNameState} updateFormState={ changeSpeciesName} />
				{errorState.species.length > 0 ?? <ValidationError errorMessage={errorState.species} />}
				<TextInput id={'planet_name'} labelName={'Planet Name'} value={planetNameState} updateFormState={ changePlanetName} />
				{errorState.planet.length > 0 ?? <ValidationError errorMessage={errorState.planet} />}
				<TextInput id={'num_beings'} labelName={'Number of beings'} value={numberOfBeingsState} updateFormState={ changeNumberOfBeings} />
				{errorState.beings.length > 0 ?? <ValidationError errorMessage={errorState.beings} />}
				<SelectInput id={'math_input'} labelName={'What is 2 + 2?'} value={mathState} updateFormState={ updateMathState } />
				{errorState.math.length > 0 ?? <ValidationError errorMessage={errorState.math} />}
				<TextAreaInput  id={'text_input'} labelName={'Reason for sparing'} value={explainerState} updateFormState={ updateExplainerState } />
				{errorState.reason.length > 0 ?? <ValidationError errorMessage={errorState.reason} />}
				<Button clickHandler={isFormValid} />
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