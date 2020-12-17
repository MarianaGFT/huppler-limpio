import React,{useState,useEffect,useContext} from "react";
import styled from "styled-components";
import { Form, Button,Alert } from "react-bootstrap";
import BackgroundSpaceImg7 from "../../assets/background-space7.png";
import Logo from "../../assets/logo-huppler.png";
import {usuarioContext} from '../../context/Usuarios/UsuariosState'



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
    height:40px;
    color:black;
    background-color:lightgray
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

function LogIn({history,location}) {
  const{token,autenticado,Login,error}=useContext(usuarioContext)
  const [usuario, setUsuario] = useState({
  correo:'',
  contrasena:''
  });
  const {correo,contrasena}=usuario;
  const redirect=location.search ? location.search.split('=')[1]: '/'
  //ComponentDidMount = Cuando la pagina cargue, asegura que el código ya esta listo
  useEffect(() => {
     if(token)history.push(redirect)
  }, [token,redirect,history]);

  
  const onChangeHandler=e=>{
     setUsuario({
       ...usuario,
       [e.target.name]:e.target.value
     })
  }
  const onSubmitHandler=e=>{
   e.preventDefault();
  Login(usuario)
 
  }

  return ( 
    <LoginContainer>
      <img src={Logo} alt='Logo huppler'></img>
      <WhiteContainer>
        <p>INICIAR SESIÓN</p>
        {error?<Alert variant='danger'>{error}</Alert>:null}
        <Form onSubmit={onSubmitHandler}>
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
