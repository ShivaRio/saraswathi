import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Apptopnavbar from './components/topnavbar';
import Appheaders from './components/headers';
import Appnavbar from './components/navbar';
import Appcarol from './components/carol';
import Appwelcome from './components/welcome';
import Appservices from './components/services';
import Appportfolio from './components/portfolio';
import Appservicearea from './components/servicearea';
import Appblog from './components/blog';
import Appfooter from './components/footer';
import { Container } from 'react-bootstrap';
import GoToTop from './GoToTop';

function App() {
  return (
    <div className="App">
        <Apptopnavbar />
        <Appheaders />
        <Appnavbar />
        <Appcarol />
        <Appwelcome />
        <Appservices />
        <Appportfolio />
        <Appservicearea />
        <Appblog />
        <Appfooter />
        {/* <GoToTop /> */}
        
    
    </div>
  );
}

export default App;
