import React,{useEffect,useContext} from "react";
import Hero from "../Sections/Hero";
import Catalogue from "../Sections/Catalogue";
import Faq2 from "../Sections/Faq2";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";
import {carritoContext} from '../../context/Carrito/CarritoState'
function Landing() {
  const {carritoId,crearCarrrito}=useContext(carritoContext)
  useEffect(() => {
    if(!carritoId){
      crearCarrrito()

    }
  }, [])
  return (
    <div>
      <Hero />
      <Catalogue />
      <Faq2 />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
