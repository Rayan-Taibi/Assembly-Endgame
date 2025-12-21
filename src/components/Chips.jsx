import React from 'react'
import '../styles/chips.css'
import { languages } from '../../src/language.js'

export default function Chips() {

  const languagesList = languages.map((lang)=>{
    return(
      <span>{lang.name}</span>
    )

  })

  return (
    <div className='chips'>
        {languagesList}
    </div>
  )
}
