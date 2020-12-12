import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackgroundSpaceImg7 from "../../assets/background-space7.png";
import User from "../../assets/icon/user.png";
import Edit from "../../assets/icon/edit.svg";
import Back from "../../assets/icon/back.svg";

const UserConfigContainer = styled.div`
  background-image: url(${BackgroundSpaceImg7});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: 100vh;
  text-align: left;
  padding-top: 80px;

  .back-icon-user-config {
    width: 2rem;
  }

  p {
    /* position: relative; */
    /* right: 35px; */
    color: #fff;
    font-size: 1.7rem;
    text-align: left;
    margin-left: 0.8rem;
    padding-top: 14px;
    margin-bottom: 0;
    /* padding-left: 0.5rem; */
  }

  .small-font {
    padding-top: 0;
    font-size: 1rem;
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    p {
      margin: 0 9rem;
    }
  }
`;

const WhiteContainer = styled.div`
  border-radius: 5px;
  background-color: #f9f6f6;
  height: auto;
  margin: 20px auto;
  padding: 1rem 0.3rem;
  width: 85%;

  /*Dividir el contenedor para direccion y botones al lado */
  .user-config-grid-3 {
    display: grid;
    grid-template-columns: 15% 70% 15%;
  }

  /*Dividir el contenedor para direccion y botones al lado */
  .user-config-grid-2 {
    display: grid;
    grid-template-columns: 20% 80%;
  }

  /*Display block del form de usuario */
  .form-container-user-config {
    display: block !important;
    text-align: left;
  }

  .form-control {
    width: 90%;
    height: 2rem;
  }
  .vertical-center-align {
    display: -webkit-inline-box;
    align-items: center;
  }

  .small-gray-font {
    color: #696969;
    font-size: 0.8rem;
    letter-spacing: 0.05rem;
  }

  img {
    width: 2.5rem;
    margin-left: 0;
  }

  .user-information {
    color: #000;
    font-size: 0.9rem;
    margin: 0;
  }

  .edit-icon {
    width: 0.9rem;
  }

  button {
    /* margin: 0 10px; */
  }

  .buttons-user-configuration {
    width: 5.2rem;
    margin: 0 0.8rem;
  }

  .user-icon-config {
    width: 4.5rem;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
    img {
      margin: 0 0.3rem;
    }
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    width: 30rem;

    .user-information {
      font-size: 1.2rem;
    }
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    width: 35rem;

    .user-information {
      font-size: 1.5rem;
    }

    img {
      width: 3.5rem;
      margin-left: 0.5rem;
    }

    .edit-icon {
      width: 1.3rem;
    }

    button {
      height: 2.8rem;
      width: 4.2rem;
    }
  }
`;

function UserConfig() {
  const [editUser, setEditUser] = useState(false);
  return (
    <UserConfigContainer>
      <Link to='/'>
        <img src={Back} alt='back icon' className='back-icon-user-config'></img>
      </Link>

      <p>Ajustes de usuario</p>
      <p className='small-font'>Mi cuenta</p>
      <WhiteContainer>
        {!editUser ? (
          <div className='user-config-grid-3'>
            <div className='vertical-center-align'>
              <img src={User} alt='User icon'></img>
            </div>
            <div className='vertical-center-align'>
              <p className='user-information'>
                Juan Pablo Cabellos Aguilar <br></br>juanpunch123@gmail.com
              </p>
            </div>
            <div className='vertical-center-align'>
              <Button variant='primary' onClick={() => setEditUser(true)}>
                <img src={Edit} alt='editar icon' className='edit-icon'></img>
              </Button>
            </div>
          </div>
        ) : (
          <div className='user-config-grid-2'>
            <div className='vertical-center-align'>
              <img src={User} alt='User icon' className='user-icon-config'></img>
            </div>
            <div className='form-container-user-config'>
              <Form>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label className='small-gray-font'>Correo electrónico:</Form.Label>
                  <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label className='small-gray-font'>Contraseña:</Form.Label>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>
              </Form>
              <hr></hr>
            </div>
            <Button variant='danger' className='buttons-user-configuration'>
              Eliminar
            </Button>
            <div className='container-buttons-user-config'>
              <Button variant='outline-primary' className='buttons-user-configuration'>
                Cancelar
              </Button>
              <Button
                variant='primary'
                className='buttons-user-configuration'
                onClick={() => setEditUser(false)}
              >
                Guardar
              </Button>
            </div>
          </div>
        )}
      </WhiteContainer>
    </UserConfigContainer>
  );
}

export default UserConfig;
