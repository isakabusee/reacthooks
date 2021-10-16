import React from 'react';

const data = undefined;
fetch("http://worldtimeapi.org/api.org/api/timezone/"+props.location, {
    method: "Get",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Charset": "utf-8"
    }
})
.then(result => result.json())
.then(result => {
    data = result.datetime
}).catch(error => {
    console.log(error)
});

return <div> What's the current time in {props.location}? It is {data}</div>


const Content = () => {
    return (
        <h1> Content here!</h1>
    )
}

export default Content;