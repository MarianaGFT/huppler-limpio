import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import BackgroundSpaceImg7 from "../../assets/background-space7.png";
import Logo from "../../assets/logo-huppler.png";

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

function LogIn() {
  return (
    <LoginContainer>
      <img src={Logo} alt='Logo huppler'></img>
      <WhiteContainer>
        <p>INICIAR SESIÓN</p>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Control type='email' placeholder='Correo Electrónico' />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Control type='password' placeholder='Contraseña' />
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
