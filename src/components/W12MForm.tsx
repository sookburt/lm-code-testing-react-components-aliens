import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SelectInput from './SelectInput';
import TextAreaInput from './TextAreaInput';
import Button from './Button';
import { RecordInterface } from '../interfaces/RecordInterface';
import SpeciesNameInput from './SpeciesNameInput';
import PlanetNameInput from './PlanetNameInput';
import BeingsInput from './BeingsInput';

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

	
	const [errorState, setErrorState] = useState<boolean>(false);

	const isFormValid = () => {

		console.log('inside isFormValid');

		let isValid: boolean = errorState;

		if (isValid) {
			const record:RecordInterface = buildRecord();
			console.log(record);
		}
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
				<SpeciesNameInput id={'species_name'} labelName={'Species Name'} value={speciesNameState} updateFormState={ changeSpeciesName} formErrorState={errorState} updateErrorFormState={ setErrorState } />
				<PlanetNameInput id={'planet_name'} labelName={'Planet Name'} value={planetNameState} updateFormState={ changePlanetName}  formErrorState={errorState} updateErrorFormState={ setErrorState } />
				<BeingsInput id={'num_beings'} labelName={'Number of beings'} value={numberOfBeingsState} updateFormState={ changeNumberOfBeings}  formErrorState={errorState} updateErrorFormState={ setErrorState } />
				<SelectInput id={'math_input'} labelName={'What is 2 + 2?'} value={mathState} updateFormState={ updateMathState }  formErrorState={errorState} updateErrorFormState={ setErrorState } />
				<TextAreaInput  id={'text_input'} labelName={'Reason for sparing'} value={explainerState} updateFormState={ updateExplainerState } formErrorState={errorState}  updateErrorFormState={ setErrorState } />
				{errorState ? 
					<Button clickHandler={isFormValid} isDisabled={''} /> :
					<Button clickHandler={isFormValid} isDisabled={'disabled'} /> 
				}
			</section>
		</section>
	);
};

export default W12MForm;