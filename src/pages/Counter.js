import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncreament = () => {
        setCount((previous) => previous + 1)
    }

    function handleDecreament() {
        if (count === 0) return;
        setCount(count - 1);
    }
    return (
        <div className='container'>
            <div style={{
                backgroundColor: "red",
            }}>
                this my app {count}
            </div>

            <button onClick={handleIncreament} className="btn btn-primary">Increanment</button>
            <button onClick={handleDecreament}>Decreament</button>
        </div>
    )
}

export default Counter