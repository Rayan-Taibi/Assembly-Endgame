import React from 'react'
import '../styles/status.css'
export default function Status(props) {
  return (
    <div className='status'>
       <h2>{props.status.title}</h2>
       <p>{props.status.subtitle}</p>
    </div>
  )
}
