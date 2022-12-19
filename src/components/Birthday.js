import React, { useState } from 'react';

const Birthday = (props) => {
    const { name, age, color } = props;
    const [stateAge, setAge] = useState(age);
    const handleClick = () => {
        setAge(stateAge + 1);
        console.log(age)
    }
    return (
        <div>
            <h1> { name } </h1>
            <p>Age: { stateAge}</p>
            <p>Hair Color: { color }</p>
            <button onClick={handleClick} >Birthday Button</button>
            
        </div>
    )


}


export default Birthday;