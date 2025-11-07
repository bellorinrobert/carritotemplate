import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/home"
import Shop from "./pages/Shop"
import Error404 from "./pages/Error404"

// animaciones
import 'animate.css';
import WOW from 'wow.js';

const App = () => {

  useEffect(() => {
    const wow = new WOW({
      live: true // detecta elementos dinámicos
    });
    wow.init();
  }, []);
  return (
    <BrowserRouter>
      <div className="app">

        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop/:cate" element={<Shop />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App