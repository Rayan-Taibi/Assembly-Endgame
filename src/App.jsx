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
    </> 
  )
}

export default App
