import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  return (
    <div>    
      <BrowserRouter>
      <div>
        {/* <a href='/'>Home</a> |
        <a href='/about'>About</a> |
        <a href='/services'>Services</a> |
        <a href='/contact'>Contact</a> */}
        
        <Link to={'/'}>Home</Link>|
        <Link to={'/about'}>About</Link>|
        <Link to={'/services'}>Services</Link>|
        <Link to={'/contact'}>Contact</Link>
        <hr/>
      </div>
        <Routes>
          <Route path='' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
