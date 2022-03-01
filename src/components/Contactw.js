import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Form from 'react-bootstrap/Form'
import {Container} from 'react-bootstrap'
import './Contactw.css'
import uploadcare from 'uploadcare-widget/uploadcare.lang.en.min.js'
import'./Contactw.css'
import logo from '../img/LOGO2021-02.png'



function ContactForm() {


  const [state, handleSubmit] = useForm("xwkybler");
  if (state.succeeded) {
      return <p className='titulos-form'>¡Gracias por el mensaje! Nos contactaremos contigo.</p>;
  }
  return (
    <div className='all-contact' id='contacto'>
      <Container className='all-contact-hijo'>
        <div className="row cont-contact">
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
              <Form.Label className='titulos-form'>Adjunta imágenes</Form.Label>
                <input
                  type="hidden"
                  role="uploadcare-uploader"
                  data-public-key="df0e4b0d67996b339966"
                  data-multiple="true"
                  data-system-dialog="true"
                />
              </Form.Group>
              <button type="submit" disabled={state.submitting} className='btn-enviar'>Enviar</button>
            </Form>
          </div>
          <div className="col">
            <ul className='contact-list'>
              <img src={logo}></img>
              <div>
              <li className='list'><a href="mailto:contacto@digitallabcenter.com"><i className="fas fa-envelope"></i>contacto@digitallabcenter.com</a></li>
              <li className='list'><a href="tel:+528112085845"><i className="fas fa-phone-alt"></i>81-1208-5845</a></li>
              <li className='list'><a href='https://www.facebook.com/digitalabdesign'><i className="fab fa-facebook-square"></i>@digitalabdesign</a></li>
              <li className='list'><a href='https://www.instagram.com/digitallabdesign'><i className="fab fa-instagram"></i>@digitallabdesign</a></li>
              </div>
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
