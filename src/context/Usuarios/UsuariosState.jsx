import React,{useReducer,createContext} from 'react'
import UsuarioReducer from './UsuariosReducer'
import{LOGIN,LOGOUT,OBTENER_USUARIO,OBTENER_USUARIO_DEFAULT,
  LOGIN_ERROR,OCULTAR_ERROR} from '../types'
import useApi from '../../services/api'
import constants from '../../constants/apiEndPoint'
import jwt_decode from 'jwt-decode';

const initialState={
    token:localStorage.getItem('usuario'),
    correo:'',
    nombre:'',
    apellido:'',
    autenticado:false,
    error:null,
    loading:true
}
export const usuarioContext=createContext(initialState)

export const UsuariosState=({children})=>{
    const [state,dispatch]=useReducer(UsuarioReducer,initialState)
    
    const fetchData = useApi();
    
   

    async function Login(data){
        try {
            const response = await fetchData("POST", "/login",data);
            if(response){
              console.log(response.data.token)
              localStorage.setItem('usuario',response.data.token)
            }
            dispatch({
                type:LOGIN,
                payload:response.data.token
            })
          } catch (error) {
            dispatch({
              type:LOGIN_ERROR,
              payload:'Contraseña o Correo Incorrectos'
            })
           
            console.log(error);
          }
          setTimeout(()=>{
            dispatch({
                type:OCULTAR_ERROR
            })
         },3000)
    }
    async function LogOut(){
      localStorage.removeItem('usuario')
      dispatch({
        type:LOGOUT
      })
    }
    async function ObtenerUsuario(id){
        try {
            const response = await fetchData("GET", `/minoristas/${id}`);
            //setProducts(response.data);
            //Ya cargó los datos
            console.log(response)
            dispatch({
                type:OBTENER_USUARIO,
                payload:response.data.correo
            })
           
          } catch (error) {
            console.log(error);
    
          }
    }
    async function ObtenerDefault(id){
        try {
            const nombres = await fetchData("GET", `/minoristas/${id}/direccionDefault`);
            //setProducts(response.data);
            //Ya cargó los datos
            console.log(nombres.data[0])
            dispatch({
                type:OBTENER_USUARIO_DEFAULT,
                payload:{
                    nombre:nombres.data[0].nombre,
                    apellido:nombres.data[0].apellidos,
                }
            })
          } catch (error) {
            console.log(error);
    
          }

    }
    async function modificarCorreo(correo){

    }
    async function modificarContraseña(data ){

    }

    return(
        <usuarioContext.Provider
        value={{
            correo:state.correo,
            apellido:state.apellido,
            nombre:state.nombre,
            token:state.token,
            autenticado:state.autenticado,
            error:state.error,
            Login,
            LogOut,
            ObtenerDefault,
            ObtenerUsuario
        }}
        >
            {children}
        </usuarioContext.Provider>
    )
}