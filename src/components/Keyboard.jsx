import React from 'react'   
import '../styles/Keyboard.css'

export default function Keyboard() {
   const alphabet = "abcdefghijklmnopqrstuvwxyz"
   const alphabetLetters = alphabet.split('').map((alphabetletter , index) =>(
    <button onClick={() => addGuessedLetter(alphabetletter)} key={index} className='key'>{alphabetletter.toUpperCase()}</button>
   ))

   const [guessedLetters,setGuessedLetters] = React.useState([])
   function addGuessedLetter(letter) {
    setGuessedLetters(
       prev => prev.includes(letter) ?
        prev : [...prev , letter]
      )
  }

   console.log(guessedLetters)

  return (
    <section className='keyboard'>
         {alphabetLetters}
    </section>
  )
}
