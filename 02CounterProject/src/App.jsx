import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   let [counter, setCounter] = useState(8);
//   //useState hook is used to propagate the state in our DOM
//   // let counter = 5;

//   const addValue = function () {
//     // console.log(Math.random());
//     if (counter < 20) {
//       counter = counter + 1;
//       setCounter(counter);
//     }
//   };

//   const removeValue = function () {
//     // console.log(Math.random());
//     if (counter > 0) {
//       counter = counter - 1;
//       setCounter(counter);
//     }
//   };

//   // const removeValue = function () {};
//   // counter = counter - 1;
//   return (
//     <>
//       <h1>Flipkart Billing Project</h1>
//       <h2>Counter Value: {counter}</h2>
//       <button onClick={addValue}>Add Value {counter}</button>
//       <br />
//       <button onClick={removeValue}>Remove value {counter}</button>
//       <p>Footer Counter: {counter}</p>
//     </>
//   );
// }


function App () {

// let [count, setcount] = useState(0)

// // let count = 0;
//    function addValue () {
//     // console.log(`count: ${count}` );/
//     if (count < 10) {
//     count = count + 1;
//     setcount(count);
//     }
//     // setcount(count++)
//    }

//    let removeValue = function () {
//    if (count > 0) {
//     count = count - 1 ;
//     setcount(count)
//    }
//    }

let [count, setcount] = useState(2)

let addValue = function () {
    // if (count < 20) {
    //     setcount(count + 1 )
    //     //Interview Question, now what will happen when clicked on add value
    //     // with oneclick 1 value will inc only 
    //     setcount(count + 1 ) // all are updating the same thing this is not increased. bcoz useState send the things in batches and while dending it will recognize rrhat are r having same value so the output willbe same.
    //     setcount(count + 1 )
    //     setcount(count + 1 )
    //     setcount(count + 1 )


    // }

    if (count < 20) {
        setcount(PrevCount => PrevCount + 1 )
        //Interview Question, now what will happen when clicked on add value ; here it will inc. it is th ehidden feature of use state.
        setcount(PrevCount => PrevCount + 1 )
        setcount(PrevCount => PrevCount + 1 )
        setcount(PrevCount => PrevCount + 1 )
        setcount(PrevCount => PrevCount + 1 )

        
    }
}; 

let removeValue = function () {
    if (count >= 0) {
        setcount(count - 1)
    }
}

    return (
        <>
         <h1> Amazon Web Services</h1>
         <h2>Pricing: {count}</h2>
         <h3>user Count: {count}</h3>
         <p>The total sync data : {count}</p>
         <button onClick={addValue}>Added Items: {count}</button>
         <br/>
         {/* <button onClick={removeValue}>Removed items: {count}</button> */}
         <button onClick={removeValue}>Removed Items: {count}</button>
         <br/>
        </>       
    )
}


export default App
