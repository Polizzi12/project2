import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import 'react-bootstrap'
import Mynav from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Welcome from './components/welcome';

function App() {
  return (
  <div>
    <Mynav/>
    <Welcome/>
    <Footer/>
  </div>
  
       
  );
}

export default App;
