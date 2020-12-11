import React from "react";
import styled from "styled-components";
import BackgroundSpaceImg5 from "../../assets/background-space5.jpg";
import LogoHuppler from "../../assets/logo-huppler.png";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Correo from "../../assets/correo.svg";

const FooterContainer = styled.footer`
  background-image: url(${BackgroundSpaceImg5});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: auto;

  .footer-grid {
    background-color: rgba(19, 19, 19, 0.92);
    grid-gap: 20px;
    display: grid;
    /* grid-column-gap: 30px; */
    grid-template-columns: repeat(1, 50%);
    justify-content: center;
    height: auto;
  }

  .footer-img {
    text-align: center;
    display: block;
    justify-content: center;
  }

  img {
    width: 160px;
    margin-bottom: -25px;
  }

  .footer-links {
    color: white;
    text-align: center;
  }

  .footer-links a {
    text-align: center;
    color: #fff;
  }

  .footer-social {
    display: flex;
    justify-content: space-evenly;
  }

  .footer-social img {
    width: 50px;
    padding: 5px 10px;
  }

  a {
    text-decoration: none;
    line-height: 20px;
  }

  p {
    color: #fff;
    font-size: 18px;
  }

  .derechos p {
    color: white;
    text-align: center;
    padding-bottom: 10px;
    font-size: 10px;
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    height: auto;

    .footer-grid {
      background-color: rgba(19, 19, 19, 0.92);
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(3, 33%);
      grid-column-gap: 5px;
      height: auto;
    }

    .footer-links a {
      text-align: justify;
    }

    img {
      height: 225px;
      width: 230px;
      margin-bottom: 0;
    }
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    .footer-grid {
      grid-template-columns: repeat(3, 20%);
      grid-column-gap: 80px;
      height: auto;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <div className='footer-grid'>
        <div className='footer-img'>
          <img src={LogoHuppler} alt='logo-huppler'></img>
          <p>
            Este es un pequeño click<br></br>
            para tu dedo, pero una<br></br>
            gran desición para tu<br></br>
            estilo.
          </p>
        </div>
        <div className='footer-links'>
          <h5>Accesos rápidos</h5>
          <a href='#inicio'>
            <p>Inicio</p>
          </a>
          <a href='#catalogo'>
            <p>Colección</p>
          </a>
          <a href='#contacto'>
            <p>Contacto</p>
          </a>
          <br></br>

          <h5>Links</h5>
          <a href='fac.com'>
            <p>Políticas de privacidad</p>
          </a>

          <h5>únete a nuestra comunidad</h5>
          <figure className='footer-social'>
            <a
              href='https://instagram.com/leanber_oficial'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={Instagram} alt='instagram'></img>
            </a>
            <a
              href='https://www.facebook.com/LeanberOficial/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={Facebook} alt='facebook'></img>
            </a>
            <a
              href='mailto:contacto@leanber.com?Subject=Información%20para%20colaboración'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={Correo} alt='correo'></img>
            </a>
          </figure>
        </div>
        <div className='derechos'>
          <p>© 2020 Designed by Leanber ®</p>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
