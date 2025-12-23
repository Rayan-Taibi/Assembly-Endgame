import React from 'react'
import '../styles/WordDisplay.css'
export default function WordDisplay( {letterElements}  ) {
    
  return (
    <section className="word-display">
       {letterElements}
    </section>
  )
}
