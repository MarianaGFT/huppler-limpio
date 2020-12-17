import React,{createContext,useReducer} from 'react'
import CarritoReducer from './CarritoReducer'
import {REQUEST,CREAR_CARRITO,OBTENER_CARRITO,AGREGAR_ITEM_CARRITO} from '../types'
import useApi from "../../services/api";

const initialState={
    articulos:[],
    carritoId:localStorage.getItem('carritoId'),
    success:false,
    loading:true
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
            const response = await fetchData("GET", `/carrito/${id}`);
            console.log(response.data.productos)
            dispatch({
                type:OBTENER_CARRITO,
                payload:response.data.productos
            })
          } catch (error) {
            console.log(error);
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
