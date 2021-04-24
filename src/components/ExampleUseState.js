import React, { useState } from 'react'
import { useForm } from "./useForm"

const ExampleUseState = () => {
    const [count, setCount,] = useState(() => 0);
    const [values, handleChange] = useForm({email: "", password: ""});

    return (
        <div className="UseStateExample" >
            <div className="firstExample" >
            <h3>UseState Example</h3>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            </div>
            
            <div className="secondExample">
                <input 
                name="email" 
                type="email" 
                value={values.email} 
                onChange={handleChange} 
                />
                <input 
                name="password" 
                type="password" 
                value={values.password} 
                onChange={handleChange} 
                />
                <button>Submit</button>
            </div>

        </div>
    )
}

export default ExampleUseState
