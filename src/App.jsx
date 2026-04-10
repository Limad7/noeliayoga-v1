import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AvisoLegal from './components/AvisoLegal'
import Privacidad from './components/Privacidad'
import Cookies from './components/Cookies'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Home = () => (
    <>
        <Hero />
        <Services />
        <About />
        <Contact />
    </>
);

function App() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aviso-legal" element={<AvisoLegal />} />
                <Route path="/privacidad" element={<Privacidad />} />
                <Route path="/cookies" element={<Cookies />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
