import React, { useState, useEffect } from 'react';


const Fordata = () => {
    const [users, setUsers] = useState("")

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        const response = await fetch("http://localhost:3000/data.json");
        const data = await response.json();
        try {
            setUsers(data.results);
        } catch (err) {
            console.log(err)
        }
};

    return(
        <div>
            {users && users.map(user => (
                <li key={user.login.uuid}>
                    {user.name.first} {user.name.last}
                </li>
            ))}
            <h1>Data here</h1>
        </div>
    )
}

export default Fordata;