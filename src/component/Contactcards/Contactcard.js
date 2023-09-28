import React from 'react'
import "./Contactcards.css"

function Contactcard({ name, mobile }) {
  return (
    <div className='card-contact'>
      <h1>{name}</h1>
      <span>{mobile}</span>
    </div>
  )
}

export default Contactcard;
