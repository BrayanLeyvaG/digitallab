import React from 'react'
import { Card } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'


export const ProductsCard = ({imagen1, imagen2, imagen3, titulo, parrafo}) => {
  return (
    <Card style={{ width: '18rem'}} className="card text-center">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagen1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagen2}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagen3}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
        <Card.Title className='fs-3 m-1'>{titulo}</Card.Title>
        <Card.Text className='fs-5 m-1 mb-3'>{parrafo}</Card.Text>
    </Card>
  )
}
