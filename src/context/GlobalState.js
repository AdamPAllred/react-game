import React, { createContext, useReducer } from 'react';
//inisial state

const initialState = {
	games: [],
	score: [0, 0],
};

//creat context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = ({ children }) => {
	// Actions
	function getGame() {
		return null;
	}

	function checkForWin(score) {
		if (score[0] >= 5) {
			console.log('Player 1 WON!!!');
		} else if (score[1] >= 5) {
			console.log('Player 2 Won!!!');
		}
	}

	function updateScore(player, score) {
		if (player == 'player1') {
			score[0] += 1;
		} else {
			score[1] += 1;
		}

		checkForWin(score);
	}

	return <div>here</div>;
};
