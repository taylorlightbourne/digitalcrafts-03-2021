import React, { useState } from 'react'
import Counter from './Counter'

export default function Greeter() {
    const [greet, setGreet] = useState("Tay")

    // const handleChange = (event) => {
    //     setGreet(event.target.value)
    // }
    return (
        <div className="Greeter">
            <h1>Welcome, {greet}</h1>
            <input type="text" onChange={(e) => setGreet(e.target.value)}  />
            <Counter greet={greet}/>
        </div>
    )
}