import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesNameInput from './SpeciesNameInput';
import PlanetNameInput from './PlanetNameInput';


const W12MForm = () => {

	const [speciesNameState, setSpeciesNameState] = useState({ speciesName: 'Human'});
	const [planetNameState, setPlanetNameState] = useState({ planetName: 'Earth'});

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesNameInput {...speciesNameState} />
			<PlanetNameInput {...planetNameState} />
			{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;
