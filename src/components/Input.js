import React, { useState } from 'react';



const Input = () => {
 
const [input, setInput] = useState('');

    return (
        <div className="did_it">

            <input type="text" value={setInput}></input>
            <button>Add</button>

        </div>
    )
}

export default Input;