import{LOGIN,LOGOUT,OBTENER_USUARIO,OBTENER_USUARIO_DEFAULT,
    LOGIN_ERROR,OCULTAR_ERROR} from '../types'

export default(state,action)=>{

    switch(action.type){
     
        case LOGIN:
            return{
                ...state,
                token:action.payload
            }
        case LOGIN_ERROR:
            return{
                ...state,
                error:action.payload
            }
        case LOGOUT:
            return{
                ...state,
                token:''
            } 
        case OBTENER_USUARIO:
            return{
                ...state,
                correo:action.payload
            }
        case OBTENER_USUARIO_DEFAULT:
            return{
                ...state,
                nombre:action.payload.nombre,
                apellido:action.payload.apellido

            }
        case OCULTAR_ERROR:
            return{
                ...state,
                error:null
            }
        
        default:
            return state;
    }
}