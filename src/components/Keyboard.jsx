import React from 'react'   
import '../styles/Keyboard.css'
import clsx from 'clsx'

export default function Keyboard({CurrentWord , guessedLetters , setGuessedLetters}) {

   const alphabet = "abcdefghijklmnopqrstuvwxyz"
   

   const keyboardLetters = alphabet.split('').map((letter , index)  =>{
     
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && CurrentWord.includes(letter)
    const isWrong = isGuessed && !CurrentWord.includes(letter) 
    const buttonClass = clsx({
      correct: isCorrect,
      wrong: isWrong,
   })
      

     
     return (
     <button 
     onClick={() => addGuessedLetter(letter)}
     key={index} 
     className= {buttonClass}
     >
      {letter.toUpperCase()}
     </button>
     )
   })


   
     function addGuessedLetter(letter) {
    setGuessedLetters(
       prev => prev.includes(letter) ?
       prev : [...prev , letter]
      )
  }

   

  return (
    <section className='keyboard'>
         {keyboardLetters}
    </section>
  )
}
