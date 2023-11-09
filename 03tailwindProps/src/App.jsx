import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'


function App() {
  
  const [count, setCount] = useState(0)
 let myObj = {
  username: "Rishabh",
  age: 3
 }
 let NewArray = [1, 2, 3]
  return (
    <>
      <div className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Css Props</div>
        <Card username = "cacola" btnText = "clickme" />
        <Card username = "Chai aur burger" btnText = "Visitkme" />
        <Card/>
    </>
  )
}

export default App
