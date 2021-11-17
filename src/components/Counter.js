import React,{ useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    }


    return(
        <>
        <h2>{count}</h2>
        <button onClick={increaseCount}>+sign</button>
        <button onClick={decrementCount}>-sign</button>
        </>
    )
}

export default Counter;