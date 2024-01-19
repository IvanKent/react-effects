import { useState, useEffect } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('re-rendered!')
    }, [name])

    const increment = () => {
        setCount((c) => c+1);
    }
    const handleChange = (evt) => {
        setName(evt.target.value)
    }


    return (
        <div>
            <h1>{count}</h1>
            <input type="text" onChange={handleChange} value={name} />
            <button onClick={increment}>+1</button>
        </div>
    )
}