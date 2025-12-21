import React from 'react'   
import '../styles/Keyboard.css'
export default function Keyboard() {
   const alphabet = "abcdefghijklmnopqrstuvwxyz"
   const alphabetLetters = alphabet.split('').map((alphabetletter , index) =>(
    <button key={index} className='key'>{alphabetletter.toUpperCase()}</button>
   ))

  return (
    <section className='keyboard'>
         {alphabetLetters}
    </section>
  )
}
