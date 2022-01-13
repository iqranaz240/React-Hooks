import React from 'react'
import { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    const [temp, setTemp] = useState(2)

    const tick = () => {
        setCount(count => count +1)
        
    }

    useEffect(() => {
         const interval = setTimeout(tick, 1000)

        // return () => {
        //      clearInterval(setInterval(() => setCount(10), 10000))
        // }
    }, [temp])

    return (
        <div>
            {count}{' '}
            {temp}
            <button onClick={() => setInterval(() => setTemp(temp => temp +1), 1000)}>Button</button>
        </div>
    )
}

export default IntervalHookCounter
