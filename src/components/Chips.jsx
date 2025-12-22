import React from 'react'
import {clsx} from 'clsx'
import '../styles/chips.css'

export default function Chips({languagesList}) {

  

  return (
    <div  className='chips'>
        {languagesList}
    </div>
  )
}
