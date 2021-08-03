import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const PlayerButton = ({ player }) => {
	const { updateScore } = useContext(GlobalContext);
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>{player}</button>
			<p>{count}</p>
		</div>
	);
};
