import {REQUEST,OBTENER_CARRITO,AGREGAR_ITEM_CARRITO,CREAR_CARRITO,ERROR_OBTENER_CARRITO} from '../types'

export default(state,action)=>{

    switch(action.type){
        case REQUEST:
            return{
                ...state,
                success:false,
                loading:true
            }
        case OBTENER_CARRITO:
            return{
                ...state,
                articulos:action.payload,
                success:true,
                loading:false,
            }
        case CREAR_CARRITO:
            return{
                ...state,
                carritoId:action.payload,
                success:true,
                loading:false,
            }
        case AGREGAR_ITEM_CARRITO:
            return{
                 ...state,
                success:true,
                loading:false,
            }
        case ERROR_OBTENER_CARRITO:
            return{
                ...state,
                articulos:'',
                carritoId:'',
                success:true,
                loading:false,
            }
        default:
            return state
    }
}