import React from 'react'
import '../styles/wordDisplay.css'
export default function WordDisplay( {letterElements}) {
    
  return (
    <section className="word-display">
       {letterElements}
    </section>
  )
}
