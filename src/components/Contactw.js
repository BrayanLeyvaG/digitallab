import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Form from 'react-bootstrap/Form'
import {Container, Button} from 'react-bootstrap'
import './Contactw.css'
import uploadcare from 'uploadcare-widget/uploadcare.lang.en.min.js'
import'./Contactw.css'



function ContactForm() {


  const [state, handleSubmit] = useForm("xwkybler");
  if (state.succeeded) {
      return <p>¡Gracias por el mensaje! Nos contactaremos contigo.</p>;
  }
  return (
    <div className='all-contact' id='contacto'>
      <Container className='all-contact-hijo'>
        <div className="row">
          <div className="col all-form">
            <h5>Envianos un correo</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='titulos-form'>Correo Electronico</Form.Label>
                <Form.Control
                  className="form-control form-control-lg"
                  type="email" 
                  name="Correo"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='titulos-form'>Escribenos tu idea</Form.Label>
                <Form.Control  className="form-control form-control-lg" as="textarea" rows={5}
                  name="Mensaje"
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </Form.Group>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <input
                    name='Archivos'
                    type="hidden"
                    role="uploadcare-uploader"
                    data-public-key="df0e4b0d67996b339966"
                    data-system-dialog="true"
                />
              </Form.Group>
              <Button type="submit" disabled={state.submitting}>Enviar</Button>
            </Form>
          </div>
          <div className="col">
            <ul>
              <li><i className="fas fa-envelope"></i>contacto@digitallabcenter.com</li>
              <li><i className="fas fa-phone-alt"></i>81 1208 5845</li>
              <li><i className="fab fa-facebook-square"></i>https://www.instagram.com/digitallabdesign/</li>
              <li><i className="fab fa-instagram"></i>https://www.facebook.com/digitalabdesign</li>
              
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
