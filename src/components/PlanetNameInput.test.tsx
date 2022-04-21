import { useState } from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import PlanetNameInput, {Props} from './PlanetNameInput';
import { platform } from 'os';

describe("PlanetNameInput", () => {

  test("renders Planet Name input label", () => {
    const state:Props = {planetName: 'Earth', updateMethod: () => {} }
    render(<PlanetNameInput planetName={state.planetName} updateMethod={state.updateMethod} />);
    const labelText = screen.getByText(/Planet Name/i);
    expect(labelText).toBeInTheDocument();
  });
});