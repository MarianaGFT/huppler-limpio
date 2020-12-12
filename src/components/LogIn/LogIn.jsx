import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import BackgroundSpaceImg7 from "../../assets/background-space7.png";
import Logo from "../../assets/logo-huppler.png";
import useApi from '../../services/api'
import constants from '../../constants/apiEndPoint'


const LoginContainer = styled.div`
  background-image: url(${BackgroundSpaceImg7});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: auto;
  text-align: center;
  padding: 1rem 0;

  img {
    margin-top: 30px;
    width: 200px;
  }
`;

const WhiteContainer = styled.div`
  border-radius: 10px;
  background-color: #f9f6f6;
  height: 300px;
  margin: 20px;

  p {
    padding-top: 30px;
  }

  .form-control {
    width: 90%;
    margin: 0 auto;
  }

  .text-muted {
    color: #4795dd !important;
    text-align: right;
    margin: 0 2rem;
  }

  Button {
    margin-top: 30px;
    width: 80%;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
    width: 290px;
    margin: 0 auto;
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    width: 380px;
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    width: 400px;
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    width: 520px;
  }
`;

function LogIn({history}) {
  const fetchData = useApi();
  const [usuario, setUsuario] = useState({
  correo:'',
  contrasena:''
  });
  const sesion=localStorage.getItem('usuario')
  const [token,setToken]=useState(sesion ? sesion:'')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageSrc = constants.apiEndPoint + "/public/img/";
  const {correo,contrasena}=usuario;

  //ComponentDidMount = Cuando la pagina cargue, asegura que el código ya esta listo
  useEffect(() => {
     if(token)history.push('/')
  }, [token]);

  
  const onChangeHandler=e=>{
     setUsuario({
       ...usuario,
       [e.target.name]:e.target.value
     })
     console.log(usuario)
  }

  const fetchProducts = async (usuario) => {
    //Cargando datos
    setLoading(true);
    //No hay ningún error
    setError(null);

    try {
      const response = await fetchData("POST", "/login",usuario);
      setToken(response.data);
      console.log(response.data.token)
      localStorage.setItem('usuario',response.data.token)
      // console.log(response);
      //Ya cargó los datos
      setLoading(false);
    } catch (error) {
      setLoading(false);
      //No hay ningún error
      setError(error);
      console.log(error);
    }
    // setLoading(false);
  };
  const onSubmitHandler=e=>{
   e.preventDefault();
   fetchProducts(usuario);
   if (error) {
    return "Error: ${error.response.message}";
  }

  if (loading === true) {
    return "Loading...";
  }
  }
  


  return ( 
    <LoginContainer>
      <img src={Logo} alt='Logo huppler'></img>
      <WhiteContainer>
        <p>INICIAR SESIÓN</p>
        <Form  onSubmit={onSubmitHandler}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Control type='email' 
            placeholder='Correo Electrónico'
            name='correo'
            value={correo}
            onChange={onChangeHandler} />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Control type='password' 
            placeholder='Contraseña' 
            name='contrasena'
            value={contrasena}
            onChange={onChangeHandler} />
          </Form.Group>
          <Form.Text className='text-muted'>¿Olvidaste tu contraseña?</Form.Text>
          <Button variant='primary' type='submit'>
            ACCEDER
          </Button>
        </Form>
      </WhiteContainer>
    </LoginContainer>
  );
}

export default LogIn;
