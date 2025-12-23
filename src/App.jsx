import React from 'react'
import Header from './components/Header.jsx'
import Status from './components/Status.jsx'
import './components/Chips.jsx'
import Chips from './components/Chips.jsx'
import WordDisplay from './components/WordDisplay.jsx'
import Keyboard from './components/Keyboard.jsx'
import { languages } from './language.js'
import {clsx} from 'clsx'
import {getFarewellText} from '../utils.js'
import {GetRandomWord} from '../utils.js'
import Confetti from "react-confetti"
function App() {
  // State to hold guessed letters and current word
  const [guessedLetters,setGuessedLetters] = React.useState([])
  const [CurrentWord, setCurrentWord] = React.useState(GetRandomWord())
  
  let WrongGuessesCount = guessedLetters.filter(letter =>!CurrentWord.includes(letter)).length
 
  const isGameLost = WrongGuessesCount >= languages.length -1
  const letterElements = CurrentWord.split('').map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter) 
    const letterClassName = clsx( isGameLost && !guessedLetters.includes(letter) && "missed-letter" )
    return( 
        <span key={index} className={letterClassName}>
           {shouldRevealLetter ? letter.toUpperCase() : ""}
        </span>
        )
    })
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
  const numGuessesLeft = languages.length - 1
  const isGameWon = CurrentWord.split('').every(letter => guessedLetters.includes(letter))
  
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length -1]
  const islastGuessedLetterWrong = lastGuessedLetter && !CurrentWord.includes(lastGuessedLetter)

  
 
   function renderGameStatus() {
        if (!isGameOver && islastGuessedLetterWrong) {
            return (
              <p className='farewell-message'>
                 {getFarewellText(languages[WrongGuessesCount - 1].name)}
              </p>
            )
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        } if(isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
       
          return null
        
    }
  
  const classNamesStatus  = clsx('status' , {
    won: isGameWon,
    lost: isGameLost,
    farewellMessage: !isGameOver && islastGuessedLetterWrong
})
   
  function startNewGame() {
     setCurrentWord(GetRandomWord())
     setGuessedLetters([])
  }
    


  
  return (
  <main>
    {
       isGameWon && 
       <Confetti 
            recycle={false}
            numberOfPieces={1000}
       /> 
    }
    <Header />
    <Status renderGameStatus={renderGameStatus()} classNamesStatus={classNamesStatus}/>
    <Chips languagesList={languagesList} />
    <WordDisplay letterElements={letterElements} CurrentWord={CurrentWord} guessedLetters={guessedLetters} />
    {/* Combined visually-hidden aria-live region for status updates */}
            <section 
                className="sr-only" 
                aria-live="polite" 
                role="status"
            >
                <p>
                    {CurrentWord.includes(lastGuessedLetter) ? 
                        `Correct! The letter ${lastGuessedLetter} is in the word.` : 
                        `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                    }
                    You have {numGuessesLeft} attempts left.
                </p>
                <p>Current word: {CurrentWord.split("").map(letter => 
                guessedLetters.includes(letter) ? letter + "." : "blank.")
                .join(" ")}</p>
            
            </section>
    <Keyboard CurrentWord={CurrentWord}  letterElements={letterElements} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} isGameOver={isGameOver}/>
     {isGameOver && 
     <button
      onClick={ startNewGame} 
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
  </main> 
  )
}

export default App
