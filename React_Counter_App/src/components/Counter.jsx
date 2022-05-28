import React, { useState } from 'react';
import "../styles/Counter.css";

const MyCounter = () => {
    const [current, setCurrent] = useState(0);
    let style1 = {
        color: 'red',
    }; 
    return (
        <>
            <h1>Counter Using React</h1>
            <h1 style={{color:current%2==0?'green':'red'}}>{current}</h1>
            <button onClick={() => {    
                setCurrent(current + 1)
            }}>Increment</button>
            <button className='test' onClick={() => {
                if (current > 0)
                {
                    setCurrent(current - 1)
                }
            }}>Decrement</button>
            <button className='double' onClick={()=> {
                
                setCurrent(current*2)
            }}>Double</button>
        </>
    );
};

export default MyCounter;