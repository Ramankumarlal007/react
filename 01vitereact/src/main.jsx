import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp() {
  return (
    <> 
     <h1>rishabh is a good boy| custom react!! </h1>
      </>
  )
}


const anotherElement = (
  <a href="https://www.youtube.com">
    Youtube
  </a>
);

let anotherUser = "(this got at last automatically in the reactElement)"

const reactElement = React.createElement(
  'a',
  {href: "https://www.youtube.com",target: '_blank'},
  'click here to visit youtube',
  anotherUser

)

ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement
)
//  