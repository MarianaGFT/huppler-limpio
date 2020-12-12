import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import BackgroundSpaceImg7 from "../../assets/background-space7.png";
import User from "../../assets/icon/user.png";
import Edit from "../../assets/icon/edit.svg";

const UserConfigContainer = styled.div`
  background-image: url(${BackgroundSpaceImg7});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 3rem 0;

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
  .user-config-grid {
    display: grid;
    grid-template-columns: 15% 70% 15%;
  }

  div {
    display: -webkit-inline-box;
    align-items: center;
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
  return (
    <UserConfigContainer>
      <p>Ajustes de usuario</p>
      <p className='small-font'>Mi cuenta</p>
      <WhiteContainer>
        <div className='user-config-grid'>
          <div>
            <img src={User} alt='User icon'></img>
          </div>
          <div>
            <p className='user-information'>
              Juan Pablo Cabellos Aguilar <br></br>juanpunch123@gmail.com
            </p>
          </div>
          <div>
            <Button variant='primary'>
              <img src={Edit} alt='editar icon' className='edit-icon'></img>
            </Button>
          </div>
        </div>
      </WhiteContainer>
    </UserConfigContainer>
  );
}

export default UserConfig;
