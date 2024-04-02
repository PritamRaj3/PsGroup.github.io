import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './Component/Footer';
import Navbar from './Component/NavigationPage/navbar';
import Home from './Component/Home';
import Gallery from './Component/Gallery';
import About from './Component/About';
import Contact from './Component/Contacts';
import BookEvent from './Component/BookEvent';
import Services from './Component/ServicesPage/Services';



function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/gallery' Component={Gallery} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/services' Component={Services} />
        <Route exact path='/bookevent' Component={BookEvent} />
        <Route exact path='/contact' Component={Contact} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
