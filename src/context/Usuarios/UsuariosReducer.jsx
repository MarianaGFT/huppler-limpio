import{LOGIN,LOGOUT,OBTENER_USUARIO,OBTENER_USUARIO_DEFAULT,
    LOGIN_ERROR,OCULTAR_ERROR,OBTENER_DIRECCIONES,AGREGAR_DIRECCIONES,
    BORRAR_DIRECION,OBTENER_DIRECCION,REQUEST,DIRECCION_RESET,MODIFICAR_DIRECCION,
    ERROR_HANDLER} from '../types'

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
                apellido:action.payload.apellido,
                Default:action.payload.default,
                loading:false,
                error:false

            }
        case OBTENER_DIRECCIONES:
            return{
                ...state,
                loading:false,
                direcciones:action.payload
            }
        case OBTENER_DIRECCION:
        return{
            ...state,
            success:true,
            direccionSelec:action.payload,
            loading:false,
        }
        case AGREGAR_DIRECCIONES:
            return{
                ...state,
                loading:false,
                success:true,
                error:false
            }

        case OCULTAR_ERROR:
            return{
                ...state,
                error:null
            }
        case BORRAR_DIRECION:
            return{
                ...state,
                direcciones:state.direcciones.filter(x=>x.id!==action.payload),
                success:true
            }
        case MODIFICAR_DIRECCION:
            return{
                ...state,
                loading:false,
                success:true
            }
        case REQUEST:
        return{
           ...state,
           success:false,
           loading:true,
           error:false
        }
        case ERROR_HANDLER:
            return{
                ...state,
                succes:true,
                loading:false,
                error:true
            }

        default:
            return state;
    }
}