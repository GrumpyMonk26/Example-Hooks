import React, {useEffect} from 'react'
import { useForm } from "./useForm"

const ExampleUseEffect = () => {
    const [values, handleChange] = useForm({email: "", password: ""});

    useEffect(() => {
        console.log("render")
    })

    return (
        <div className="useEffectExample">
            <h3>UseEffect Example</h3>
            <>
            <input 
            name="email" 
            value={values.email} 
            onChange={handleChange} 
            />
            <input 
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}   
            />  
            <button>Submit</button>       
            </>
            
        </div>
    )
}

export default ExampleUseEffect
