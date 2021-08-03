import React from 'react';
import { GlobalContext } from '../context/GlobalState';

export const PlayerButton = ({ player }) => {
	//const { score } = useContext(GlobalContext);
	return (
		<div>
			<button>{player}</button>
		</div>
	);
};
