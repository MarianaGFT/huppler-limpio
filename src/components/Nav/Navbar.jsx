import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Home from "../../assets/icon/home.png";
import Shirt from "../../assets/icon/shirt.png";
import Help from "../../assets/icon/help.png";
import Contact from "../../assets/icon/contact.png";
import Logo from "../../assets/icon/Logo-huppler.png";
import Rocket from "../../assets/icon/rocket.png";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { usuarioContext } from "../../context/Usuarios/UsuariosState";
const Nav = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 4;
  overflow-x: none;
  display: flex;
  align-items: center;

  .logo-huppler,
  .icons-navbar,
  button {
    display: none;
  }

  .rocket-container {
    position: absolute;
    top: 30px;
    right: 10px;
  }

  .rocket-container img {
    width: 35px;
  }
  .cohete-sesion {
    margin: 0 !important;
    color: white;
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    background-color: #262626;
    justify-content: center;
    text-align: center;

    .logo-huppler {
      display: block;
      position: absolute;
      left: 0;
      width: 70px;
      /* padding-top: 6px; */
    }

    .icons-navbar {
      display: block;
      width: 40px;
      height: 40px;
    }

    .dRvdZI {
      display: none;
    }

    button {
      border-radius: 10px;
      width: 75px;
      margin: 0;
      display: block;
      background-color: transparent;
      border: transparent;
      text-align: -webkit-center;
    }

    button:hover {
      background-color: #545454;
      transition: transform ease-in 0.1s, box-shadow ease-in 0.15s;
      box-shadow: 0 2px 10px #505050;
    }

    button:active {
      border-bottom: 4px solid #059aee;
    }

    .rocket-position {
      position: absolute;
      top: 7px;
      right: 18px;
    }
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    /* width: 100%;
    height: 60px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    overflow-x: none;
    transition: top 0.3s; */

    button {
      margin: 0 25px;
    }
  }

  /************ 1024 ************/
  /* @media screen and (min-width: 1024px) {
    background-color: #262626;
    justify-content: center;
    text-align: center;

    .logo-huppler {
      display: block;
      position: absolute;
      left: 0;
      width: 70px;
      padding-top: 6px;
    }

    .icons-navbar {
      display: block;
      width: 40px;
      height: 40px;
    }

    .dRvdZI {
      display: none;
    }

    button {
      border-radius: 10px;
      width: 75px;
      margin: 5px 25px;
      display: block;
      background-color: transparent;
      border: transparent;
      text-align: -webkit-center;
    }

    button:hover {
      background-color: #545454;
      transition: transform ease-in 0.1s, box-shadow ease-in 0.15s;
      box-shadow: 0 2px 10px #505050;
    }
  } */
`;

const Navbar = ({ open, setOpen }) => {
  const { token, LogOut } = useContext(usuarioContext);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  };
  const userHandler = (e) => {};
  return (
    <Nav id='navbar'>
      <Burger open={open} setOpen={setOpen} />
      <img src={Logo} alt='Logo huppler' className='logo-huppler'></img>
      <button>
        <a href='#inicio'>
          <img src={Home} alt='home' title='Inicio' className='icons-navbar'></img>
        </a>
      </button>
      <button>
        <a href='#catalogo'>
          <img src={Shirt} alt='shirt' title='Catalogo' className='icons-navbar'></img>
        </a>
      </button>
      <button>
        <a href='#faqs'>
          <img src={Help} alt='help' title='Ayuda' className='icons-navbar'></img>
        </a>
      </button>
      <button>
        <a href='#contacto'>
          <img src={Contact} alt='shirt' title='Contacto' className='icons-navbar'></img>
        </a>
      </button>
      {!token ? (
        <button>
          <a href='/login'>
            <p className='cohete-sesion'>Iniciar Sesion</p>
          </a>
        </button>
      ) : (
        <DropdownButton id='dropdown-basic-button' title='User'>
          <Dropdown.Item href='#/action-1' onClick={userHandler}>
            <a href='/user'>Ajustes de usuario</a>
          </Dropdown.Item>
          <Dropdown.Item href='#/action-2' onClick={() => LogOut()}>
            Cerrar Sesion
          </Dropdown.Item>
        </DropdownButton>
      )}
      <button className='rocket-position'>
        <a href='/cohete-de-compra'>
          <img src={Rocket} alt='shirt' title='Cohete' className='icons-navbar '></img>
        </a>
      </button>
    </Nav>
  );
};

export default Navbar;
