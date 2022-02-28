import './App.css';
import { Contactw } from './components/Contactw';
import { Galeryw } from './components/Galeryw';
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
        <Galeryw/>
        <Howw/>
        <Contactw/>

    </div>
  );
}

export default App;
