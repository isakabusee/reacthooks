import React, { useState } from 'react';

const Input = () => {
    const [phrase, setPhrase] = useState("");
    const [display, setDisplay] = useState("");
    const [greet, setGreet] = useState("Guest");
    const [showing, setShowing] = useState("")

    const handleSubmit = () => {
        setDisplay(phrase);
    }
    //correct


    const submitName = (e) => {
        setGreet(e.target.value);
    }

    const handleUpdateName = () => {
        setShowing(greet);
    }

    return(
        <>

        <h1>Hello {showing}</h1>

        <input placeholder={"name"} onChange={submitName}/>
        <button onClick={handleUpdateName}>Update Name</button>

        <h1>{display}</h1>
        <input placeholder={"phrase"} onChange={event => setPhrase(event.target.value)}/>
        <button onClick={handleSubmit} >submit</button>
        </>
    )
}
export default Input;