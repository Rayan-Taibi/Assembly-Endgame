import React from 'react'
import Header from './components/Header.jsx'
import Status from './components/Status.jsx'
import './components/Chips.jsx'
import Chips from './components/Chips.jsx'
import WordDisplay from './components/WordDisplay.jsx'
import Keyboard from './components/Keyboard.jsx'
function App() {
  
  const [status,setStatus]=React.useState({
    title:"You win",
    subtitle :"Well done ! "
  })
 

  
  return (
  <>
    <Header />
    <Status status={status} />
    <Chips />
    <WordDisplay />
    <Keyboard />
     <button style={{ 
      backgroundColor: "#11B5E5",
       border: "1px solid #D7D7D7",
       borderRadius: "4px",
       width: "225px",
       height: "40px",
       padding: "6px 12px",
       display: "block",
       marginInline: "auto",
       cursor: "pointer"}} className="new-game">New Game</button>
  </> 
  )
}

export default App
