import React from 'react'
import { Container } from 'react-bootstrap'
import { HowCard } from './helpers/HowCard'
import './Howw.css'

export const Howw = () => {
  return (
    <div className='all-how' id='como'>
        <h4 className='titulo-how'>¿Cómo iniciar un pedido?</h4>
        <Container className="d-flex justify-content-center align-items-center">
          <div className='how-cards'>
            <HowCard 
            icono='fas fa-lightbulb'
            titulo='Identifica tu idea o diseno'
            parrafo='Compartenos un boceto, imagen de referencia o el uso que buscas darle.'
            numero='1'
            />
            <HowCard 
            icono='fas fa-box-open'
            titulo='Define caracteristicas'
            parrafo='Material (MDF, acrilico, vinil), grosor, largo, ancho y cantidad de piezas'
            numero='2'
            />
            <HowCard 
            icono='fas fa-file-invoice-dollar'
            titulo='Recibe un presupuesto y/o cotizacion'
            parrafo='Esto varia segun las caracteristicas del diseno, antes mencionado en el paso 2'
            numero='3'
            />
            <HowCard 
            icono='fas fa-search'
            titulo='Confirma la vista previa de tu diseno'
            parrafo='Una vez abonado tu anticipo, para confirmar tus datos, te haremos llegar como se vera tu diseno previo a ser fabricado'
            numero='4'
            />

          </div>
        </Container>
    </div>
  )
}
