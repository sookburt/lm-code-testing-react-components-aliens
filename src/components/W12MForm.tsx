import { useEffect, useState } from 'react';
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
	const [speciesErrorState, setSpeciesErrorState] = useState<boolean>(false);
	const changeSpeciesName = (name:string) => {
		setSpeciesNameState(name);
	}
	
	const [planetNameState, setPlanetNameState] = useState<string>('');
	const [planetErrorState, setPlanetErrorState] = useState<boolean>(false);
	const changePlanetName = (name:string) => {
		setPlanetNameState(name);
	}
	
	const [numberOfBeingsState, setNumberOfBeingsState] = useState<string>('0');
	const [beingsErrorState, setBeingsErrorState] = useState<boolean>(false);
	const changeNumberOfBeings = (name:string) => {
		setNumberOfBeingsState(name);
	}
	
	const [mathState, setMathState] = useState<string>('');
	const [mathErrorState, setMathErrorState] = useState<boolean>(false);
	const updateMathState = (name:string) => {
		setMathState(name);
	}

	const [explainerState, setExplainerState] = useState<string>(''); 
	const [explainerErrorState, setExplainerErrorState] = useState<boolean>(false);
	const updateExplainerState = (name: string) => {
		setExplainerState(name);
	}

	const [formErrorState, setFormErrorState] = useState<boolean>(false);

	useEffect(() => {

		setFormErrorState(speciesErrorState && planetErrorState && beingsErrorState && mathErrorState && explainerErrorState);

	}, [speciesErrorState, planetErrorState, beingsErrorState, mathErrorState, explainerErrorState]);

	const isFormValid = () => {

		console.log('inside isFormValid');

		let isValid: boolean = formErrorState;
		console.log('The Error State is currently: ' + isValid);

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
				<SpeciesNameInput id={'species_name'} labelName={'Species Name'} value={speciesNameState} updateFormState={ changeSpeciesName} formErrorState={speciesErrorState} updateFormErrorState={ setSpeciesErrorState } />
				<PlanetNameInput id={'planet_name'} labelName={'Planet Name'} value={planetNameState} updateFormState={ changePlanetName}  formErrorState={planetErrorState} updateFormErrorState={ setPlanetErrorState } />
				<BeingsInput id={'num_beings'} labelName={'Number of beings'} value={numberOfBeingsState} updateFormState={ changeNumberOfBeings}  formErrorState={beingsErrorState} updateFormErrorState={ setBeingsErrorState } />
				<SelectInput id={'math_input'} labelName={'What is 2 + 2?'} value={mathState} updateFormState={ updateMathState }  formErrorState={mathErrorState} updateFormErrorState={ setMathErrorState } />
				<TextAreaInput  id={'text_input'} labelName={'Reason for sparing'} value={explainerState} updateFormState={ updateExplainerState } formErrorState={explainerErrorState}  updateFormErrorState={ setExplainerErrorState } />
				<Button clickHandler={isFormValid} isDisabled={formErrorState} /> 
			</section>
		</section>
	);
};

export default W12MForm;