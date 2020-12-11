import React from "react";
import styled from "styled-components";
import BackgroundSpaceImg5 from "../../assets/background-space5.jpg";

const ContactContainer = styled.div`
  /* background-image: url(${BackgroundSpaceImg5});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #000; */
  height: 200px;

  .contacto-title {
    color: white;
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  .contacto-button {
    display: flex;
    justify-content: center;
  }

  .contacto-button a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
  }

  .contacto-button button {
    background-color: #0ac8b1;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    border-style: none;
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    .contacto-button button {
      width: 210px;
      height: 45px;
    }

    .contacto-button a {
      font-size: 20px;
    }

    /************ 1024 ************/
    @media screen and (min-width: 1024px) {
      .contacto-button button {
        width: 230px;
        height: 50px;
        border-radius: 10px;
      }

      .contacto-button a {
        font-size: 23px;
      }
    }
  }
`;

function Contact() {
  return (
    <ContactContainer id='contacto'>
      <div className='contacto-title'>
        <h4>¿Aún tienes alguna duda?</h4>
      </div>
      <div className='contacto-button'>
        <button>
          <a href='https://wa.me/523121325857?text=Hola%20equipo%20Leanber.%20Me%20interesa%20colaborar%20con%20ustedes'>
            Contáctanos 🚀
          </a>
        </button>
      </div>
    </ContactContainer>
  );
}

export default Contact;
