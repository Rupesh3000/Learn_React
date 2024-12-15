import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function updateCounter(params) {
        setCount(count+1)
    }

    return (
        <div className="h-36 bg-white text-black absolute">
            <h1>Threethousand you clicked {count} times</h1>
            <button onClick={updateCounter}>
                Click me
            </button>
        </div>
    );
}

export default Counter