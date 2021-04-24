import React, {useEffect, useState} from 'react'
import { useFetch } from './useFetch';
import { useForm } from "./useForm"

const ExampleUseEffect = () => {
    const [values, handleChange] = useForm({
        email: "", 
        password: "",
        firstName: ""
    });

    const [count, setCount] = useState(() => 
    JSON.parse(localStorage.getItem('count'))
    );
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))
    },[count])

    //http://numbersapi.com/43/trivia
    // useEffect(() => {
    //     const onMouseMove = e => {
    //         console.log(e);
    //     };
    //     window.addEventListener("mousemove", onMouseMove);
    //     return () => {
    //         window.removeEventListener("mousemove", onMouseMove)
    //     };
    // },[]);

    return (
        <div className="useEffectExample">
            <h3>UseEffect Example</h3>
            <>
            <input 
            name="email" 
            placeholder="email"
            value={values.email} 
            onChange={handleChange} 
            />
            <input 
            name="firstName"
            placeholder="first name"
            value={values.firstName}
            onChange={handleChange}
            />
            <input 
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}   
            />  
            <button>Submit</button> 
            <div className="dataUrl" >{loading ? "...loading" : data}</div> 
            <div>count: {count} </div>  
            <button onClick={() => setCount(c => c + 1)}>Increment</button>   
            </>
            
        </div>
    )
}

export default ExampleUseEffect
