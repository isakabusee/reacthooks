import React, { useState, useEffect } from 'react';



const Fordata = () => {
    const [users, setUsers] = useState({})
    // const [myData, setMyData] = useState({})

    useEffect(() => {
        fetchUsers();
    }, []);

   
   const fetchUsers = async () => {
       const response = await fetch("http://localhost:3000/data.json")
       const data = await response.json();
       console.log(data)
       try {
           setUsers(data.response);
       } catch (errors) {
           console.log(errors);
       }
   } ;

    return(
        <div>
            <h1>Data here</h1>
            <label htmlFor="data">Data:</label><br />
            {!users && <textarea id="data" rows="12" cols="60" />}
            {users && (
                <textarea id="data" row="12" cols="60" readOnly values={JSON.stringify(users)} />
            )}
            <br />
            <button onClick={fetchUsers}>Load Data</button>
        </div>

        
    )
}

export default Fordata;