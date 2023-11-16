import React, { useCallback, useEffect, useRef, useState } from 'react';

// useRef :this is used to take reference of sth

function App() {
const [length, setlength] = useState(8);
const [numberAllowed, setnumberAllowed] = useState(false);
const [characterAllowed, setcharacterAllowed] = useState(false);
const [password, setpassword] = useState("");

// const passwordGenerator = () => {}
// const passwordGenerator = useCallback(fn, [dependencies])
// useCallback it is used for memoiztion and optimization/ cashe memory
const passwordGenerator = useCallback(function () {
  let pass = "";
  let string = "ABCDEFGHIJKLMNOPQRSTUVdfdfWXYZabcdeklmnoffgpqrstuvwxyz"
  if (numberAllowed) string += "01234567fffgf8789";
  if (characterAllowed) string += "!@#$%^7a(_)'/-{}[]"

  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * string.length + 1)
    pass += string.charAt(char)
  }
setpassword(pass)

}, [length, numberAllowed, characterAllowed, setpassword])


//without call back
// const passwordGenerator = function () 
// {
//   let pass = "";
//   let string = "ABCDEFGHIJKLMNOPQRSTUVdfdfWXYZabcdeklmnoffgpqrstuvwxyz"
//   if (numberAllowed) string += "01234567fffgf8789";
//   if (characterAllowed) string += "!@#$%^7a()'/{}[]"

//   for (let i = 0; i < length; i++) {
//     let char = Math.floor(Math.random() * string.length + 1)
//     pass += string.charAt(char)
//   }
//   setpassword(pass)
// }


// passwordGenerator() , we can't do like this 

// useEffect is used for re-rendering the function again if any dependencies changes
useEffect( function () {
  passwordGenerator()
}, [length, numberAllowed, characterAllowed, passwordGenerator])

//useRef hook:
const passwordRef = useRef(null)

const copyPasswordtoClipboard = useCallback( () => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(5, 9)
   window.navigator.clipboard.writeText(password)
} , [password])


  return (
    <>
    <h1 className='font-bold text-5xl text-red-500 bg bg-slate-800 text-center p-4  '>Password Generator</h1>
    
    <div className='w-full mx-auto max-w-md shadow-lg rounded-lg px-4 py-8 my-8 text-red-800 text-left font-semibold text bg-slate-700'>
      <div>
      <label htmlFor="password">Password: </label>
      <input 
      type="text"
      name="password"
      id="password"
      value= {password} 
      placeholder='password'
      readOnly
      ref = {passwordRef}
      className='outline-none w-full px-1 py-3 mb-4'
      />
      <br />
      <button 
      onClick={copyPasswordtoClipboard}
      className='bg-blue-700 px-10 outline-none mb-2 py-2 font-bold text-green-800 rounded-md underline hover:text-orange-700'>Copy</button>
     
      </div>
     <div>
     
      <input
      className='cursor-pointer'
      type="range"
      name="range"
      id="range"
      value={length}
      min={4} 
      max={90}
      onChange={(e) => {setlength(e.target.value)}}/>
      <label htmlFor="range">Length: {length}</label>
       
      <label htmlFor="number"> number </label>
      <input
       type="checkbox" 
       defaultChecked = {numberAllowed}
       name="number" 
       id="number"
       onChange={() => {setnumberAllowed((prev) => !prev)}} />

      <label htmlFor="character"> character </label>
      <input 
      type="checkbox" 
      defaultChecked = {characterAllowed}
      name="character"
       id="character" 
       onChange={() => {setcharacterAllowed((prev) => !prev)}}/>
     </div>
     <div>
      <button className='bg-orange-600 px-5 py-3 rounded-md text-white' onClick={passwordGenerator}>check</button>
     </div>
    </div>
    </>
  );
}

export default App;