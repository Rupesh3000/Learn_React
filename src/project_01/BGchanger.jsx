import { useState } from 'react'

function BGChanger() {
    const [color, setColor] = useState("black")

    return (
        <div className='w-full h-screen flex items-end justify-center' style={{ backgroundColor: color }}>

            <div className='mb-4 flex flex-wrap justify-center bottom-12 inset-x-0 px-3 py-2 rounded-3xl text-black gap-3 outline-none bg-white w-fit'>
                <button onClick={() => setColor("green")}
                    className="outline-none px-4 py-1 rounded-full"
                    style={{ backgroundColor: "green" }}>
                    Green</button>
                <button onClick={() => setColor("red")}
                    className="outline-none px-4 py-1 rounded-full"
                    style={{ backgroundColor: "red" }}>
                    Red</button>
                <button onClick={() => setColor("blue")}
                    className="outline-none px-4 py-1 rounded-full"
                    style={{ backgroundColor: "blue" }}>
                    Blue</button>
                <button onClick={() => setColor("orange")}
                    className="outline-none px-4 py-1 rounded-full"
                    style={{ backgroundColor: "orange" }} >
                    Orange</button>
                <button onClick={() => setColor("yellow")}
                    className="outline-none px-4 py-1 rounded-full"
                    style={{ backgroundColor: "yellow" }}>
                    Yellow</button>
                <button onClick={() => setColor("indigo")}
                    className="outline-none px-4 py-1 rounded-full"
                    style={{ backgroundColor: "indigo" }}>
                    Indigo</button>
            </div>
        </div>
    )
}

export default BGChanger