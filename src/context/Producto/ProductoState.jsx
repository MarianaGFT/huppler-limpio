import React,{useReducer,createContext} from 'react'
import ProductosReducer from './ProductosReducer'
import constants from '../../constants/apiEndPoint'
import useApi from "../../services/api";
import{OBTENER_PRODUCTO,OBTENER_PRODUCTOS,REQUEST} from '../types'

const initialState={
    productos:[],
    producto:{},
    success:false,
    loading:true
}
export const productosContext=createContext(initialState)

export const ProductosState=({children})=>{
    const fetchData = useApi();
    const [state,dispatch]=useReducer(ProductosReducer,initialState)

    async function obtenerProductos(){
        dispatch({
            type:REQUEST
        })
        try {
            const response = await fetchData("GET", "/productos");
            console.log(response.data);
            dispatch({
                type:OBTENER_PRODUCTOS,
                payload:response.data
            })
          } catch (error) {
            //No hay ningún error
            console.log(error);
          }

    }
    async function obtenerProducto(id){
        try {
            const response = await fetchData("GET", `/productos/${id}`);
            console.log(response.data);
            dispatch({
                type:OBTENER_PRODUCTO,
                payload:response.data
            })
          } catch (error) {
            console.log(error);
          }
    }
    return(
        <productosContext.Provider
        value={{
            producto:state.producto,
            productos:state.productos,
            success:state.success,
            loading:state.loading,
            obtenerProducto,
            obtenerProductos
        }}
        >
            {children}
        </productosContext.Provider>
    )

}