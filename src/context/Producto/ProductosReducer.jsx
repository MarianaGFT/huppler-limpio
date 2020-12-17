import{OBTENER_PRODUCTOS,OBTENER_PRODUCTO,REQUEST} from '../types'

export default(state,action)=>{

    switch(action.type){
        case OBTENER_PRODUCTOS:
            return{
                ...state,
                productos:action.payload,
                success:true,
                loading:false
            }
        case OBTENER_PRODUCTO:
            return{
                ...state,
                producto:action.payload,
                success:true,
                loading:false
            }
        case REQUEST:
        return{
           ...state,
           success:false,
           loading:true,
        }
        default:
            return state;
    }
}