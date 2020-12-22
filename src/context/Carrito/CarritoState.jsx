import React,{createContext,useReducer} from 'react'
import CarritoReducer from './CarritoReducer'
import {REQUEST,CREAR_CARRITO,OBTENER_CARRITO,AGREGAR_ITEM_CARRITO,ERROR_OBTENER_CARRITO} from '../types'
import useApi from "../../services/api";
import axios from 'axios'
import constants from '../../constants/apiEndPoint'

const clienteAxios= axios.create({
    baseURL:constants.apiEndPoint
})

const initialState={
    articulos:[],
    carritoId:localStorage.getItem('carritoId'),
    success:false,
    loading:false
}

export const carritoContext=createContext(initialState)

export const  CarritoState=({children})=> {
    const[state,dispatch]=useReducer(CarritoReducer,initialState)
    const fetchData = useApi();

    async function obtenerCarrito(id){
        dispatch({
            type:REQUEST
        })
        try {
            const response = await clienteAxios.get(`/carrito/${id}`);
            console.log(response.data.productos)
            dispatch({
                type:OBTENER_CARRITO,
                payload:response.data.productos
            })
          } catch (error) {
            console.log(error.response)
            localStorage.removeItem('carritoId')
            dispatch({
                type:ERROR_OBTENER_CARRITO
            })
          }
    }
    async function crearCarrrito(){
        dispatch({
            type:REQUEST
        })
        try {
            const response = await fetchData("POST", "/carrito");
            console.log(response.data.id);
            localStorage.setItem('carritoId',response.data.id)
            dispatch({
                type:CREAR_CARRITO,
                payload:response.data.id
            })
          } catch (error) {
            console.log(error);
          }
    }
    async function agregarItem(producto){
        console.log(state.carritoId)
        const id=localStorage.getItem('carritoId')
        try {
            const response = await fetchData("PUT",`/carrito/${id}/productos`,(producto));
            console.log(response.data)
            dispatch({
                type:AGREGAR_ITEM_CARRITO
            })
          } catch (error) {
            console.log(error);
          }
    }
    async function borrarItem(){

    }
     

    return (
        <carritoContext.Provider
        value={{
         articulos:state.articulos,
         carritoId:state.carritoId,
         loading:state.loading,
         success:state.success,
         obtenerCarrito,
         crearCarrrito,
         agregarItem
        }}
        >
            {children}
        </carritoContext.Provider>
    )
}

export default CarritoState
