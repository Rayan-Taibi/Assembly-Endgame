import React from 'react'
import Header from './components/Header.jsx'
import Status from './components/Status.jsx'
function App() {
  
  const [status,setStatus]=React.useState({
    title:"You win",
    subtitle :"Well done ! "
  })
  return (
    <>
    <Header />
    <Status status={status} />
    </> 
  )
}

export default App
