import './App.css';
import ContactForm from './components/Contactw';
import { Footerw } from './components/Footerw';
import { Herow } from './components/Herow';
import { Howw } from './components/Howw';
import { Navbarw } from './components/Navbar';
import { Servicesw } from './components/Servicesw';
//import {Container} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Navbarw/>
        <div className='principal-bg'>
          <Herow/>
          <Servicesw/>
        </div>
        <Howw/>
        <ContactForm/>
        <Footerw/>

    </div>
  );
}

export default App;
