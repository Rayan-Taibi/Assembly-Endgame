import React from 'react'
import '../styles/wordDisplay.css'
export default function WordDisplay() {
  
  const [CurrentWord, setCurrentWord] = React.useState("react")

  const letterElements = CurrentWord.split('').map((letter, index) => (
    <span key={index} className="letter">
      {letter.toUpperCase()}
    </span>
  ));

  
  
  return (
    <section className="word-display">
       {letterElements}
    </section>
  )
}
