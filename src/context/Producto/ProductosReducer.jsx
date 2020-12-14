import{OBTENER_PRODUCTOS,OBTENER_PRODUCTO} from '../types'

export default(state,action)=>{

    switch(action.type){
        case OBTENER_PRODUCTOS:
            return{
                ...state,
                productos:action.payload
            }
        case OBTENER_PRODUCTO:
            return{
                ...state,
                producto:action.payload
            }
        
        default:
            return state;
    }
}