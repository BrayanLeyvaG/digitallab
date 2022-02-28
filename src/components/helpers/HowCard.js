import React from 'react'
import './HowCard.css'

export const HowCard = ({icono, titulo, parrafo, numero}) => {
  return (
    <div className='all-card'>
        <div className='circle-numb'>{numero}</div>
        <i className={`${icono}`}></i>
        <h5>{titulo}</h5>
        <p>{parrafo}</p>
    </div>
  )
}
