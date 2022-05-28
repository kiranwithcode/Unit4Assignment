import React, {useState, useEffect, useRef} from 'react';
import './css/board.css';


const Board = ({reset, setReset, winner, setWinner}) => {
    // creating a turn state, which indicates the current turn
    const [turn, setTurn] = useState(0);
    // creating a data state, which contains the current picture of the board
    const [data, setData] = useState(['','','','','','','','','']);
    // creating a reference for the board
    const boardRef = useRef(null);

    // creating a function to draw on the board
    const draw = (event, index) => {
        // draw only if the position is empty and winner is not decided yet
        if(data[index-1] === '' && winner === '') {
            // Draw X if player 1s turn else draw O
            const current = turn === 0 ? "X" : "O";
    
            // Updating the data state
            data[index-1] = current;
    
            // drawing on the board
            event.target.innerText = current;

            // switching the turn
            setTurn(turn === 0 ? 1 : 0)
        }
    }

    // resetting the board whenever the winner is decided
    useEffect(() => {
        // clearing the dataState
        setData(['','','','','','','','','']);

        // getting all the childrens(cells) of the board
        const cells = boardRef.current.children;

        // clearing the board
        for(let i=0 ; i<9 ; i++) {
            cells[i].innerText = '';
        }

        // Resetting the turn to player 0
        setTurn(0);

        // Resetting the winner
        setWinner('');
        setReset(false);
    }, [reset, setReset, setWinner])

    // useEffect hook to check for the winner
    useEffect(() => {
        // checking win condition in the rows
        const checkRow = () => {
            let ans = false;
            for(let i=0 ; i<9 ; i += 3) {
                ans |= (data[i] === data[i+1] && data[i] === data[i+2] && data[i] !== '')
            }
            return ans;
        }

        // checking win condition in the cols
        const checkCol = () => {
            let ans = false;
            for(let i=0 ; i<9 ; i ++) {
                ans |= (data[i] === data[i+3] && data[i] === data[i+6] && data[i] !== '')
            }
            return ans;
        }

        // checking win condition in the diagonals
        const checkDiagonals = () => {
            return((data[0]===data[4] && data[0]===data[8] && data[0] !== '' || data[2]===data[4] && data[2]===data[6] && data[2] !== ''))
        }

        // checking if there exists any win condition or not
        const checkWin = () => {
            return (checkRow() || checkCol() || checkDiagonals());
        }

        // checking for a tie
        const checkTie = () => {
            let count = 0;
            data.forEach((cell) => {
                if(cell !== '') {
                    count++;
                }
            })
            return count == 9;
        }
        // setting the winner in case of a win
        if(checkWin()) {
            setWinner(turn === 0 ? "Player 2 wins" : "Player 1 wins");
        } else if(checkTie()) {
            setWinner("It's a tie");
        }
    })
  return (
    <div ref={boardRef} className="board">
        <div className='input input-1' onClick={(e) => draw(e, 1)}></div>
        <div className='input input-2' onClick={(e) => draw(e, 2)}></div>
        <div className='input input-3' onClick={(e) => draw(e, 3)}></div>
        <div className='input input-4' onClick={(e) => draw(e, 4)}></div>
        <div className='input input-5' onClick={(e) => draw(e, 5)}></div>
        <div className='input input-6' onClick={(e) => draw(e, 6)}></div>
        <div className='input input-7' onClick={(e) => draw(e, 7)}></div>
        <div className='input input-8' onClick={(e) => draw(e, 8)}></div>
        <div className='input input-9' onClick={(e) => draw(e, 9)}></div>
    </div>
  )
}

export default Board