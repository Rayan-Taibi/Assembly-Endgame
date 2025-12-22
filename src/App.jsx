import React from 'react'
import Header from './components/Header.jsx'
import Status from './components/Status.jsx'
import './components/Chips.jsx'
import Chips from './components/Chips.jsx'
import WordDisplay from './components/WordDisplay.jsx'
import Keyboard from './components/Keyboard.jsx'
import { languages } from './language.js'
import {clsx} from 'clsx'

function App() {
  // State to hold guessed letters and current word
  const [guessedLetters,setGuessedLetters] = React.useState([])
  const [CurrentWord, setCurrentWord] = React.useState("react")
  
  let WrongGuessesCount = guessedLetters.filter(letter =>!CurrentWord.includes(letter)).length
 

  const letterElements = CurrentWord.split('').map((letter, index) => (
    
    <span key={index} className="letter">
       {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  ));
  const languagesList = languages.map((lang , index)=>{
   const isLanguageLost = WrongGuessesCount > index 
   
   const chipStyle = {
    backgroundColor:lang.backgroundColor,
    color:lang.color, 
  }
   const ClassName = clsx('chip', isLanguageLost && 'lost')

    return(
      <span key={lang.name} className={ClassName} style={chipStyle}>{lang.name}</span>
    )

  })
  const isGameWon = CurrentWord.split('').every(letter => guessedLetters.includes(letter))
  const isGameLost = WrongGuessesCount >= languages.length -1
  const isGameOver = isGameWon || isGameLost

  function handleNewGame() {
      
      setGuessedLetters([])
      setCurrentWord("javascript")
      WrongGuessesCount=0
    
    
  }
  
 
  
  const status =
  ( isGameWon ?
  {
     title:"You Won!",
     subtitle:"Well done!"
  }
  : isGameLost ? {
      title:"You Lost!",
      subtitle:`The word was ${CurrentWord.toUpperCase()}`
  }:
  {
    
  }
)
  const classNamesStatus  = clsx('status', isGameWon && 'won', isGameLost && 'lost')
   

    


  
  return (
  <>
    <Header />
    <Status status={status} classNamesStatus={classNamesStatus}/>
    <Chips languagesList={languagesList} />
    <WordDisplay letterElements={letterElements} CurrentWord={CurrentWord} guessedLetters={guessedLetters} />
    <Keyboard CurrentWord={CurrentWord}  letterElements={letterElements} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} />
     {isGameOver && <button
      style={{ 
      backgroundColor: "#11B5E5",
       border: "1px solid #D7D7D7",
       borderRadius: "4px",
       width: "225px",
       height: "40px",
       padding: "6px 12px",
       display: "block",
       marginInline: "auto",
       cursor: "pointer"}} className="new-game">
        New Game
      </button>}
  </> 
  )
}

export default App
