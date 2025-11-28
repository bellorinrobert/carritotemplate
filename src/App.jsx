import React, { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Error404 from './pages/Error404'
// animaciones
import 'animate.css';
import WOW from 'wow.js';
import CartPage from './pages/CartPage'
import Detalle from './pages/detalle'
import ContacPage from './pages/contact/ContacPage'
import CheackoutPage from './pages/checkout/CheackoutPage'

const App = () => {
   // inicializar WOW.js para las animaciones
  useEffect(() => {
    const wow = new WOW({
      live: true // detecta elementos dinámicos
    });
    wow.init();
  }, []);
  return (
    <BrowserRouter>
    <div className='app'>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cartpage' element={<CartPage/>}/>
          <Route path='/shop/:id/:titulo' element={<Shop/>}/>
          <Route path='/detalle/:id/:titulo' element={<Detalle />}/>
          <Route path='/contact' element={<ContacPage/>}/>
          <Route path='/checkout' element={<CheackoutPage />}/>

          <Route path='/error404' element={<Error404/>}/>
          <Route path='*' element={<Error404/>}/>

        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App