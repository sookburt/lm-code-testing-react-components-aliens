import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesNameInput from './SpeciesNameInput';


const W12MForm = () => {

	const [speciesNameState, setSpeciesNameState] = useState({ speciesName: 'human'});

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesNameInput speciesName= {speciesNameState.speciesName} />
			{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;
