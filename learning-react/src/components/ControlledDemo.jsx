import React, { useState } from 'react';

const ControlledDemo = () => {
    const [name, setName] = useState("")

    const handleSubmit = ()=>{
        alert(`${name} is Submited`)
    }

    return (
        <div>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Your Name' />
            <p>Your Name is : {name}</p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default ControlledDemo;