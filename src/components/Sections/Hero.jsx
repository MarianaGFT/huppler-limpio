import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import BackgroundSpaceImg from "../../assets/background-space.jpg";
import BackgroundSpaceImg8 from "../../assets/background-space8.jpg";

import Rocket from "../../assets/icon/rocket.png";
import LogoHuppler from "../../assets/icon/Logo-huppler.png";
import FlechaAbajo from "../../assets/flecha-hacia-abajo.svg";

const HeroContainer = styled.div`
  background-image: url(${BackgroundSpaceImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: 812px;

  .rocket-container {
    position: absolute;
    top: 30px;
    right: 10px;
  }

  .rocket-container img {
    width: 35px;
  }

  .hero-logo {
    /* display: flex;
    justify-content: center;
    flex-wrap: wrap; */
    display: block;
    text-align: center;
  }

  .hero-logo img {
    width: 220px;
    padding-top: 15px;
  }

  .hero-logo h1 {
    color: white;
    /* size: 8px; */
    font-family: "Lato", sans-serif;
    /* width: 250px; */
    text-align: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 55px;
    font-size: 25px;
    font-weight: 600;
  }

  Button {
    margin-top: 60px;
    width: 9em;
    height: 3em;
  }

  .drop-down {
    display: grid;
    grid-template-columns: repeat(1, 50px);
    grid-template-rows: 3;
    justify-content: center;
    margin-top: 60px;
  }

  .drop-down img {
    width: 80px;
    height: 50px;
    margin: -10px;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 812px;

    .rocket-container {
      top: 25px;
      right: 15px;
    }

    .rocket-container img {
      width: 40px;
    }

    .hero-logo img {
      /* width: 240px; */
      padding-top: 30px;
    }

    .hero-logo h1 {
      margin-top: 55px;
      font-size: 25px;
    }
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    background-image: url(${BackgroundSpaceImg8});
    width: 100%;
    height: 851px;

    .hero-logo img {
      width: 245px;
      padding-top: 70px;
    }

    .hero-logo h1 {
      font-size: 30px;
      margin-top: 25px;
    }

    Button {
      margin-top: 20px;
    }
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 1024px;

    .hero-logo img {
      padding-top: 70px;
    }

    .hero-logo h1 {
      font-size: 40px;
    }
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    background-repeat: no-repeat;
    width: 100%;
    height: 1366px;

    .hero-logo img {
      width: 220px;
      padding-top: 70px;
    }

    .hero-logo h1 {
      font-size: 65px;
      margin-top: -15px;
      margin-bottom: 30px;
    }

    Button {
      width: 9em;
      margin-top: 20px;
    }

    .drop-down {
      display: none;

      .drop-down img {
        display: none;
      }
    }
  }
`;

function Hero() {
  return (
    <HeroContainer id='inicio'>
      <div className='rocket-container'>
        <img src={Rocket} alt='white rocket'></img>
      </div>
      <div className='hero-logo'>
        <img src={LogoHuppler} alt='Logo Huppler'></img>
        <h1>
          Este es un pequeño Tap<br></br>
          para tu dedo, pero una<br></br>
          gran desición para tu<br></br>
          estilo.
        </h1>
        <Button variant='dark'>Explorar</Button>
      </div>

      <div className='drop-down'>
        <img src={FlechaAbajo} alt='Felcha hacia abajo'></img>
        <img src={FlechaAbajo} alt='Felcha hacia abajo'></img>
        <img src={FlechaAbajo} alt='Felcha hacia abajo'></img>
      </div>
    </HeroContainer>
  );
}

export default Hero;
