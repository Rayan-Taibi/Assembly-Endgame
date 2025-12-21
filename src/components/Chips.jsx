import React from 'react'
import '../styles/chips.css'
import { languages } from '../../src/language.js'

export default function Chips() {

  const languagesList = languages.map((lang)=>{

  const chipStyle = {
    backgroundColor:lang.backgroundColor,
    color:lang.color,
   
  }

    return(
      <span key={lang.name} className='chip' style={chipStyle}>{lang.name}</span>
    )

  })

  return (
    <div  className='chips'>
        {languagesList}
    </div>
  )
}
