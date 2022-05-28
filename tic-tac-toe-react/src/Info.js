import React from 'react';
import './css/info.css';

const Info = ({player1, player2}) => {
  const p1 = player1;
  const p2 = player2;
  return (
    <div className='info'>
        <div className='player'>Player 1 : {p1} </div>
        <div className='player'>Player 2 : {p2} </div>
    </div>
  )
}

export default Info