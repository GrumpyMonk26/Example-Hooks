import React, {useEffect, useState, useRef} from 'react'
import { Reference } from './Reference';
import { useFetch } from './useFetch';
import { useForm } from "./useForm"

const ExampleUseRef = () => {
    const [values, handleChange] = useForm({
        email: "", 
        password: "",
        firstName: ""
    });

    const [count, setCount] = useState(() => 
    JSON.parse(localStorage.getItem('count'))
    );
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
    const inputRef = useRef();

    const [showHello, setShowHello] = useState(true)

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
        <div className="useRefExample">
            <h3>UseEffect Example</h3>
            <>
            <input 
            ref={inputRef}
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
            <button 
            onClick={() => {
                inputRef.current.focus();
            }}
            >
            Focus
            </button> 
            <div className="dataUrl" >{loading ? "...loading" : data}</div> 
            <div>count: {count} </div>  
            <button onClick={() => setCount(c => c + 1)}>Increment</button> 
            <button onClick={() => setShowHello(!showHello)}>toggle</button>
            {showHello && <Reference />}  
            </>
            
        </div>
    )
}

export default ExampleUseRef
