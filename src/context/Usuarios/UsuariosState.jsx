import React,{useReducer,createContext} from 'react'
import UsuarioReducer from './UsuariosReducer'
import{LOGIN,LOGOUT,
  OBTENER_USUARIO,
  OBTENER_USUARIO_DEFAULT,
  LOGIN_ERROR,
  OCULTAR_ERROR,
  OBTENER_DIRECCIONES,
  AGREGAR_DIRECCIONES,
  BORRAR_DIRECION,
  OBTENER_DIRECCION,
  REQUEST,
  MODIFICAR_DIRECCION} from '../types'
import useApi from '../../services/api'
import constants from '../../constants/apiEndPoint'
import jwt_decode from 'jwt-decode';
import axios from 'axios'

const initialState={
    token:localStorage.getItem('usuario'),
    correo:'',
    nombre:'',
    apellido:'',
    autenticado:false,
    error:null,
    loading:true,
    Default:{},
    direcciones:[],
    direccionSelec:{},
    success:false,
    error:false,
}
export const usuarioContext=createContext(initialState)

export const UsuariosState=({children})=>{
    const [state,dispatch]=useReducer(UsuarioReducer,initialState)
    
    const fetchData = useApi();
    
   

    async function Login(data){
        try {
            const response = await fetchData("POST", "/login",data);
            if(response){
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
            const response = await fetchData("GET",`/minoristas/${id}`);
            //setProducts(response.data);
            //Ya cargó los datos 
              dispatch({
                type:OBTENER_USUARIO,
                payload:response.data.correo
            })
          } catch (err) {
            console.log(err);
    
          }
    }
    async function ObtenerDefault(id){
        try {
            const nombres = await fetchData("GET",`/minoristas/${id}/direccionDefault`);
            //setProducts(response.data);
            //Ya cargó los datos
            dispatch({
                type:OBTENER_USUARIO_DEFAULT,
                payload:{
                    nombre:nombres.data[0].nombre,
                    apellido:nombres.data[0].apellidos,
                    default:nombres.data[0]
                }
            })
          } catch (error) {
            console.log(error);
          }
    }


    async  function obtenerDireccion({usuario,id}){
      dispatch({
        type:REQUEST
      })
      try {
        const direccion = await fetchData("GET",`/minoristas/${usuario}/datosEnvio/${id}`);
        dispatch({
            type:OBTENER_DIRECCION,
            payload:direccion.data
        })
      } catch (error) {
        console.log(error);
      }
    }

    async function modificarCorreo(correo,id){
      try {
        const nombres = await fetchData("PUT", `/minoristas/${id}/direccionDefault`);
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
    async function modificarContraseña(data ){

    }
    async function  obtenerDirecciones(id){
      try {
        const direcciones = await fetchData("GET",`/minoristas/${id}/datosEnvio`);
        //setProducts(response.data);
        //Ya cargó los datos
        dispatch({
          type:OBTENER_DIRECCIONES,
          payload:direcciones.data
        })
      } catch (error) {
        console.log(error);

      }
    }

    async function agregarDireccion({id,datos}){
      try {
        const direcciones = await fetchData("POST",`/minoristas/${id}/datosEnvio`,datos);
        //setProducts(response.data);
        //Ya cargó los datos
        console.log(direcciones)
        dispatch({
          type:AGREGAR_DIRECCIONES,
        })
      } catch (error) {
        console.log(error);

      }
    }
    async function editarDireccion({id,usuario,datos}){
      console.log(datos)
      try {
        const direcciones = await fetchData("PUT",`/minoristas/${usuario}/datosEnvio/${id}`,datos);
        console.log(direcciones)
        dispatch({
          type:MODIFICAR_DIRECCION
        })
       
      } catch (error) {
        console.log(error);

      }
      
    }
    async function eliminarDirecciones({id,usuario}){
      try {
        const direcciones = await fetchData("DELETE",`/minoristas/${usuario}/datosEnvio/${id}`);
        console.log(direcciones)
        dispatch({
          type:BORRAR_DIRECION,
          payload:id
        })
      } catch (error) {
        console.log(error);

      }
      
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
            Default:state.Default,
            direcciones:state.direcciones,
            direccionSelec:state.direccionSelec,
            success:state.success,
            loading:state.loading,
            Login,
            LogOut,
            ObtenerDefault, 
            ObtenerUsuario,
            obtenerDirecciones,
            agregarDireccion,
            eliminarDirecciones,
            obtenerDireccion,
            editarDireccion
        }}
        >
            {children}
        </usuarioContext.Provider>
    )
}