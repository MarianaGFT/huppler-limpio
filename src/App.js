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

import AddressView from "./components/Address/AddressView";
import User from './containers/User'

function App() {
  const [open, setOpen] = useState(false);
  return (
    <User.Provider>
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
            <Route exact path='/user' component={UserConfig} />
            <Route exact path='/productos/:id' component={Product}/>
          </Switch>
        </Router>
      </div>
    </>
    </User.Provider>
  );
}

export default App;
