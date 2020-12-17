import React,{useContext,useEffect} from 'react';
import {Route,Redirect} from 'react-router-dom'

import {usuarioContext} from '../context/Usuarios/UsuariosState'

const RutaPrivada = ({component:Component,...props }) => {
    const authContext=useContext(usuarioContext);
    const {token}=authContext
    return (
      <Route {...props} render={props=>!token?(
          <Redirect to="/"/>
      ):(
          <Component {...props}/>
      )}
      
      
      />

      );
}
 
export default RutaPrivada;