import { useRef } from 'react'

export const Reference = () => {
    const renders = useRef(0);
    console.log("hello renders: ", renders.current++)

    return <div>hello</div>;
}