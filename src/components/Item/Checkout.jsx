import React,{useContext,useEffect} from "react";
import styled from "styled-components";
import BackgroundSpaceImg5 from "../../assets/background-space5.jpg";
import Map from "../../assets/icon/map-pin.png";
import CardItem from "../CardItem";
import Camisa1 from "../../assets/camisa1.png";
import Visa from "../../assets/Visa.png";
import MasterCard from "../../assets/MasterCard.png";
import AmericanExpress from "../../assets/AmericanExpress.png";
import Paypal from "../../assets/Paypal.png";
import Oxxo from "../../assets/Oxxo.png";
import {usuarioContext} from '../../context/Usuarios/UsuariosState'

const CheckoutContainer = styled.div`
  background-image: url(${BackgroundSpaceImg5});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: 700px;
  text-align: ceenter;

  .container-title {
    display: flex;
    justify-content: center;
  }

  .container-title h2 {
    margin-top: 30px;
    color: #fff;
    margin: 0em;
    padding: 30px 0px;
  }

  .inf-envio {
    width: 80%;
    height: 100px;
    border-radius: 10px;
    background-color: #c4c4c4;
    text-align: center;
    display: flex;
    margin: 0 auto;
  }

  .inf-envio img {
    width: 55px;
    padding: 25px 0px;
  }

  .car-items {
    border-radius: 10px;
    background-color: #c4c4c4;
    height: auto;
    width: 80%;
    margin: 0 auto;
  }

  .gtKOzX span {
    width: 59px;
    height: 70px;
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    .gtKOzX span img {
      width: 65px;
      margin-top: 0px;
    }
  }
`;

const GridContainer = styled.div`
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: auto;
  justify-content: center;
  text-align: ceenter;
`;

const WhiteContainer = styled.div`
  border-radius: 10px;
  background-color: #c4c4c4;
  height: auto;
  /* text-align: center;
  display: flex;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  padding: 0.7rem; */

  img {
    width: 60px;
  }

  p {
    padding-left: 30px;
    margin-right: 20px;
    font-size: 30px;
  }
`;

function Checkout({history}) {
  const {token}=useContext(usuarioContext)
  useEffect(() => {
    if(!token){
      history.push('/login')
    }
  }, [history,token])
  return (
    <CheckoutContainer>
      <div className='container-title'>
        <h2>Checkout</h2>
      </div>
      <GridContainer>
        <div className='inf-envio'>
          <img src={Map} alt='map pin'></img>
          <p>
            <b>C.P. 28973</b> <br></br> Cristobal Colón 750 - Villa de Álvarez - Colima - Mex
            <br></br>Yerania Rivera - 3121541417 <br></br>
            <a href='/adresses'>Editar o elegir otro</a>
          </p>
        </div>
        <div className='car-items'></div>
        <WhiteContainer>
          <CardItem imagenProducto={Camisa1} />
          <p>
            <b>1 x Camisa Space</b>
            <br></br>Diseño minimalista de constelación con la palabra space en idioma japonéss
            <b>$399</b>
          </p>
          <hr></hr>
          <p>Sub Total: $399</p>
          <hr></hr>
          <p>Total: $399</p>
        </WhiteContainer>
        <div>
          <WhiteContainer>
            <p>Tarjeta de crédito</p>
            <img src={Visa} alt='Visa'></img>
            <img src={MasterCard} alt='MasterCard'></img>
            <img src={AmericanExpress} alt='AmericanExpress'></img>
          </WhiteContainer>
          <WhiteContainer>
            <p>PayPal</p>
            <img src={Paypal} alt='paypal'></img>
          </WhiteContainer>
          <WhiteContainer>
            <p>Oxxo</p>
            <img src={Oxxo} alt='oxxo'></img>
          </WhiteContainer>
        </div>
      </GridContainer>
    </CheckoutContainer>
  );
}

export default Checkout;
