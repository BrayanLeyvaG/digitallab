import React from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'
import heroimg from '../img/hro.png'
import './Herow.css'


export const Herow = () => {
  return (
    <div className='hero-cont'>
        <Container >
            <Row className="d-flex flex-row-reverse">
                <Col sm={6} className="d-flex justify-content-center align-items-center bg-img"><img className='img-hero' src={heroimg} alt='Productos laser sublimacion y vinil'></img></Col>
                <Col sm={6} className="d-flex flex-column justify-content-center align-items-center">
                    <h2 className='fs-1'>¡Haz realidad tus ideas!</h2>
                    <p className="text-center fs-4">Nos dedicamos a la fabricación de productos mediante corte y grabado láser, así como corte de vinil y vinil textil. Entre los materiales que se pueden trabajar son el mdf, acrílico, madera, foamy, cartón, diferentes tipos de plásticos, tela, piel, entre otros.</p>
                    <a href='#contacto'>
                      <button  className='btn-contactanos'>Contáctanos</button>
                    </a>
                </Col >
            </Row>
        </Container>
    </div>
  )
}
