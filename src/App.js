import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import RightNav from "./components/Nav/RightNav";
import Item from "./components/Item/Item";
import Checkout from "./components/Item/Checkout";
import ShoppingRocket from "./components/Item/ShoppingRocket";
import Landing from "./components/Landing/Landing";
import LogIn from "./components/LogIn/LogIn";
import UserConfig from "./components/User/UserConfig";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from './components/Item/Product'
import {ProductosState} from './context/Producto/ProductoState'
import {UsuariosState} from './context/Usuarios/UsuariosState'
import {CarritoState}from './context/Carrito/CarritoState'
import AddressView from "./components/Address/AddressView";
import Address from './components/Address/Address'
import User from './containers/User'
import  tokenAuth from './services/setToken'
import RutaPrivada from './services/RutaPrivada'
const token=localStorage.getItem('usuario')
if(token){
   tokenAuth(token)
}
function App() {
  const [open, setOpen] = useState(false);
  return (
<ProductosState>
  <UsuariosState>
    <CarritoState>
    <>
    
      <div>
        <Navbar open={open} setOpen={setOpen} />
        <RightNav open={open} setOpen={setOpen} />
        {/* <Hero />
        <Catalogue />
        <Faq2 />
        <Contact />
        <Footer />
        <Router>
          <ul>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path='/contacto' component={Product} />
          </Switch>
        </Router>
        <Item /> 
        <ShoppingView />*/}
        <Router>
          <Switch>
            <Landing exact path='/' component={Landing} />
            <Route exact path='/productos' component={Item} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/cohete-de-compra' component={ShoppingRocket} />
            <Route exact path='/domicilio' component={AddressView} />
            <Route exact path='/login' component={LogIn} />
            <RutaPrivada exact path='/user' component={UserConfig} />
            <Route exact path='/productos/:id' component={Product}/>
            <Route exact path='/adresses'component={AddressView}/>
            <Route exact path='/adresses/add' component={Address}/>
          </Switch>
        </Router>
      </div>
      
    </>
    </CarritoState>
    </UsuariosState>
    </ProductosState>
  );
}

export default App;
