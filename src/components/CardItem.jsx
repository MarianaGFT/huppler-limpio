import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  justify-content: center;

  span {
    margin: 0 auto;
    text-align: center;
    border-radius: 10px;
    background-color: #1f8bac51;
    width: 145px;
    height: 190px;
    /* width: 85%;
    height: 107%; */
  }

  span img {
    /* width: 150px; */
    width: 80%;
    margin-top: 5px;
  }

  span h3 {
    margin: 0px;
    color: white;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
    span {
      width: 85%;
      height: 70%;
    }

    span img {
      width: 80%;
    }
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    span {
      width: 160px;
      height: 210px;
    }
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    span {
      width: 170px;
      height: 220px;
    }

    span h3 {
      margin-top: 10px;
    }

    span img {
      width: 160px;
    }
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    span {
      width: 190px;
      height: 260px;
      margin-left:70px
    }

    span img {
      margin-top: 15px;
      width: 185px;
    }

    span h3 {
      margin-top: 20px;
      font-size: 18px;
    }
  }
`;

function CardItem({ imagenProducto, nombreCamisa,id }) {
  return (
    <CardContainer>
      <span className='cuadrado'>
      <a href={`/productos/${id}`}>
      <img src={imagenProducto} alt='camisa 1'></img>    
            </a>
        
        <h3>{nombreCamisa}</h3>
      </span>
    </CardContainer>
  );
}

export default CardItem;
