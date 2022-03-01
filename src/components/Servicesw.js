import React from 'react'
import { Container } from 'react-bootstrap'
import { ProductsCard } from './helpers/ProductsCard'
import './Servicesw.css'
import corte1 from '../img/corte1.jpg'
import corte2 from '../img/corte2.jpeg'
import corte3 from '../img/corte3.jpeg'
import sublimacion1 from '../img/sublimacion1.jpg'
import sublimacion2 from '../img/sublimacion2.jpg'
import sublimacion3 from '../img/sublimacion3.jpeg'
import vinil1 from '../img/vinil1.jpg'
import vinil2 from '../img/vinil2.jpg'
import vinil3 from '../img/vinil3.jpg'

export const Servicesw = () => {
  return (
    <div className='all-services' id='servicios'>
        <Container>
            <h3 className='text-center fs-1'>Servicios</h3>
            <div className='d-flex justify-content-around'>
                <ProductsCard 
                imagen1={sublimacion1}
                imagen2={sublimacion2} 
                imagen3={sublimacion3} 
                titulo='Sublimación'
                parrafo='Tenemos una amplia gama de servicios en sublimacion: Tazas, Playeras, Mouse Pad, Toallas de mano, portagafette, Mantas, Cojines, etc.'
                />
                <ProductsCard 
                imagen1={corte1}
                imagen2={corte2} 
                imagen3={corte3} 
                titulo='Corte y Grabado Láser'
                parrafo='Se puede utilizar en diseño de interiores, pero también en la fabricación de maquetas. Se puede trabajar sobre material de tipo madera, acrilico y MDF'
                />
                <ProductsCard 
                imagen1={vinil1}
                imagen2={vinil2} 
                imagen3={vinil3} 
                titulo='Vinil'
                parrafo='Es la forma más facil de aplicar el diseño más complejo a cualquier superficie. Desde autos hasta laptops o puertas y ventanas, tienes muchas opciones para encontrar tu vinil perfecto.'
                />

            </div>
            
        </Container>
    </div>
  )
}
