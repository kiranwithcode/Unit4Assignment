import React from "react";


const Counter = () => {
    const [count, setCount] = React.useState(0);

    const handleCounter = (value) => {
        setCount(count + value);
    }
    const handleDouble = () => {
        setCount(count * 2);
    }

    console.log(count);
    return (
        <div>
            <h1 style ={count%2==0? {color:  'green'}:{color: 'red'}}>Counter App: {count}</h1>
            
            <button onClick={() => handleCounter(1)}>Increment</button>
            <button onClick={() => handleCounter(-1)}>Decrement</button>
            <button onClick={()  => handleDouble()}>Double</button>
        </div>
    )
    
}

export default Counter;