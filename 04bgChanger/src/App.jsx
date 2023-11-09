import { useState } from "react"

function App() {
  const [color, setcolor] = useState("olive")
// onclick demands a function to get passed to it.
// setcolor is a function, but setcolor() is not a function it is a returned value passed to the onclick
  return (
    <>
    <div className="w-full h-screen " style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center px-3 py-1 rounded-2xl gap-3 bg-white">
        <button onClick={() => setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>red</button>
        <button onClick={() => setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>green</button>
        <button onClick={() => setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}>blue</button>
        <button onClick={() => setcolor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "pink" }}>pink</button>
        <button onClick={() => setcolor("violet")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "violet" }}>violet</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
