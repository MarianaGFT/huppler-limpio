import React from "react";
import styled from "styled-components";
import LogoHuppler from "../../assets/logo-huppler.png";

const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  width: 50px;
  background: #000000;
  /* opacity: 0.85; */
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 350px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 3;

  a {
    padding-top: 50px;
    text-decoration: none;
    text-align: center;
    line-height: 100px;
    transition: 0.5s;
  }

  span {
    color: #fff;
    font-size: 30px;
  }

  div {
    text-align: center;
  }

  img {
    width: 120px;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
    width: 100%;

    a {
      line-height: 50px;
    }
    img {
      width: 160px;
    }
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    width: 100%;

    a {
      line-height: 50px;
    }

    span {
      font-size: 35px;
    }

    img {
      width: 200px;
    }
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    background-color: #2c2c2c;
    width: 50%;

    a {
      line-height: 50px;
    }

    span {
      font-size: 40px;
    }

    img {
      width: 200px;
    }
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    background-color: #2c2c2c;
    width: 40%;

    a {
      line-height: 50px;
    }

    span {
      font-size: 40px;
    }

    img {
      width: 200px;
    }
  }

  /* @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: #000000;
    /* opacity: 0.85; 
    position: fixed;
    transform: ${({
    open,
  }) =>
    open
      ? "translateX(0)"
      : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 110vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    span {
      color: #fff;
    }

    a {
      line-height: 20px;
      text-align: center;
      text-decoration: none;
    }

    div {
      text-align: center;
    }

    img {
      width: 120px;
    }
  } */
`;

const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <div>
        <img src={LogoHuppler} alt='Logo Huppler'></img>
      </div>
      <a href='#inicio' onClick={() => setOpen(!open)}>
        <span>Inicio</span>
      </a>
      <a href='#catalogo' onClick={() => setOpen(!open)}>
        <span>Catálogo</span>
      </a>
      <a href='#faqs' onClick={() => setOpen(!open)}>
        <span>FAQs</span>
      </a>
      <a href='#contacto' onClick={() => setOpen(!open)}>
        <span>Contacto</span>
      </a>
    </Ul>
  );
};

export default RightNav;
