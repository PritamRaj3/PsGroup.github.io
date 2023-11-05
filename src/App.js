import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Gallery from './Component/Gallery';
import Services from './Component/Services';
import About from './Component/About';
 import Contact from './Component/Contacts';
// import Faq from './Component/Faq';



function App() {

  const routesData=[
    {
      path:'/',
      component:<Home/>
    },
    {
      path:'/about',
      component:<About/>
    },
    {
      path:'/services',
      component:<Services/>
    },
    // {
    //   path:'Faq',
    //   component:<Faq/>
    // },
    {
      path:'/gallery',
      component:<Gallery/>
    },
    {
      path:'/contact',
      component:<Contact/>
    }

  ];

  return (
    <div>
      <Navbar />
      {
        routesData.map((item) => {
          return(
          <Routes>
            <Route  exact path={ item.path} element={item.component } />
          </Routes>
          );
        })
      }
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
