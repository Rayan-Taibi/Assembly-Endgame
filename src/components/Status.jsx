import React from 'react'
import '../styles/status.css'
export default function Status(props) {
  return (
    <div className={props.classNamesStatus}>
       {props.renderGameStatus}
    </div>
  )
}
