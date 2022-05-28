import './App.css';
import Board from './Board';
import Info from './Info';
import React, { useState } from "react";

function App() {
  // creating a reset state which indicates whether the game should be reset or not
  const [reset, setReset] = useState(false);
  // creating a winner state which indicates the current winner
  const [winner, setWinner] = useState('');
  // Creating a function that invokes setReset state and resets the game
  const resetBoard = () => {
    setReset(true);
  }
  return (
    <div className="App">
      <h2 className='heading'>Tic-Tac-Toe By <span className='name'>Prajwal</span></h2>
      {/* shrinks the popup when there is no winner */}
      <div className={`winner ${winner !== '' ? '' : 'shrink'}`} >
        <div className='winner-text'> {winner} </div>
        <button onClick={() => resetBoard()}> Reset Game </button>
      </div>
      {/* Custom made board component comprising of the tic tac toe board */}
      <Board reset={reset} setReset={setReset} winner={winner} setWinner={setWinner} />
      <Info player1={"Prajwal"} player2={"Lucky"} />
    </div>
  );
}

export default App;
