import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen"
    style={{backgroundColor: color}}>
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-black">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full"
            style={{backgroundColor:"green"}}
          >Green</button>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full"
            style={{backgroundColor:"red"}}
          >Red</button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full"
            style={{backgroundColor:"blue"}}
          >Blue</button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full"
            style={{backgroundColor:"orange"}}
          >Orange</button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full"
            style={{backgroundColor:"yellow"}}
          >yellow</button>
          <button
            onClick={() => setColor("indigo")}
            className="outline-none px-4 py-1 rounded-full"
            style={{backgroundColor:"indigo"}}
          >indigo</button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full"
            style={{backgroundColor:"white"}}
          >white</button>
        </div>

      </div>
   </div>
  )
}

export default App
