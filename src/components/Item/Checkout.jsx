import React,{useContext,useEffect} from "react";
import styled from "styled-components";
import { Form, Col, Row, Dropdown, Button } from "react-bootstrap";
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
  height: auto;
  padding: 4rem 1rem 1rem 1rem;
  /* text-align: center; */

  .weight-medium-font {
    font-weight: 500;
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 0.2rem;
    margin-top: 1rem;
  }

  .btn-success {
    color: #000;
    background-color: #c4c4c4;
    border-color: #c4c4c4;
    width: 100%;
  }

  .dropdown button {
    display: flex;
  }

  .btn-success:not(:disabled):not(.disabled).active,
  .btn-success:not(:disabled):not(.disabled):active,
  .show > .btn-success.dropdown-toggle {
    color: #000;
    background-color: #c4c4c4;
    border-color: #c4c4c4;
  }

  .dropdown-menu.show {
    width: 100%;
  }

  .form-control {
    height: 2rem;
    padding: 0.5rem;
    text-align: -webkit-center;
    height: auto;
    margin: 0;
    padding: 0;
  }

  .container-pay-cards img {
    width: 3rem;
  }

  .col,
  .col-1,
  .col-10,
  .col-11,
  .col-12,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-auto,
  .col-lg,
  .col-lg-1,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-auto,
  .col-md,
  .col-md-1,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-auto,
  .col-sm,
  .col-sm-1,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-auto,
  .col-xl,
  .col-xl-1,
  .col-xl-10,
  .col-xl-11,
  .col-xl-12,
  .col-xl-2,
  .col-xl-3,
  .col-xl-4,
  .col-xl-5,
  .col-xl-6,
  .col-xl-7,
  .col-xl-8,
  .col-xl-9,
  .col-xl-auto {
    display: flex;
    align-items: center;
  }

  .img-card {
    /* margin: 1rem 0rem 0rem 0rem; */
    position: relative;
    left: 6rem;
    width: 4rem !important;

    /************ 768 ************/
    @media screen and (min-width: 768px) {
      left: 25rem;
    }
  }

  .shopping-view-checkout {
    display: block !important;
    text-align: justify;
  }

  .right {
    text-align: right;
  }

  .shipping-container .form-check-label {
    color: #fff;
    font-weight: bold;
  }

  button {
    width: 12rem;
    margin: 0 auto;
    margin-top: 1rem;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    .divider-container {
      margin: 0 auto;
    }
  }
  /************ 768 ************/
  @media screen and (min-width: 768px) {
  }
  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
  }
`;

const GridContainer = styled.div`
  /* grid-gap: 20px; */
  display: grid;
  grid-template-columns: repeat(1, 100%);
  /* height: auto;
  justify-content: center;
  text-align: ceenter; */

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    /* grid-template-columns: repeat(2, 2fr); */
  }
`;

const WhiteContainer = styled.div`
  border-radius: 10px;
  background-color: #c4c4c4;
  height: auto;
  margin: 0.5rem 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;

  .img-icon-checkout {
    width: 2rem;
    margin-right: 0.5rem;
  }

  p {
    margin: 0 !important;
    font-size: 0.8rem;
  }

  a {
    color: #0888ff;
  }

  .eWMQHi {
    display: flex;
    align-items: center;
  }

  .uppercase {
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 1.2rem;
    margin: 0;
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    width: 27rem;
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    width: 100%;
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    width: 36rem;
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
      <GridContainer>
        <div className='divider-container'>
          <p className='weight-medium-font'>Datos de envío:</p>
          <WhiteContainer>
            <img src={Map} alt='map icon' className='img-icon-checkout'></img>
            <p>
              <b>C.P. 28973</b>
              <br></br>
              Cristóbal Colón #750 - Villa de Álvarez - Colima - Mex<br></br>Mariana Fajardo -
              3121743226 <br></br>
              <a href='#'>Editar o elegir otro</a>
            </p>
          </WhiteContainer>
        </div>
        <div className='divider-container'>
          <p className='weight-medium-font'>Método de pago:</p>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                <Form>
                  <fieldset>
                    <Form.Group as={Row}>
                      <Col sm={10}>
                        <Form.Check
                          type='radio'
                          name='formHorizontalRadios'
                          label='Tarjeta de crédito'
                          id='formHorizontalRadios1'
                          className='uppercase'
                        />
                        <div className='container-pay-cards'>
                          <img src={Visa} alt='Visa img'></img>
                          <img src={MasterCard} alt='Visa img'></img>
                        </div>
                      </Col>
                    </Form.Group>
                  </fieldset>
                </Form>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Form>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Número de tarjeta</Form.Label>
                    <Form.Control type='number' placeholder='1234-5678-9000-0000' />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Label>Fecha de expiración</Form.Label>
                  <Form.Row>
                    <Col xs={4}>
                      <Form.Control
                        as='select'
                        className='mr-sm-2'
                        id='inlineFormCustomSelect'
                        custom
                      >
                        <option value='0'>Mes</option>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                      </Form.Control>
                    </Col>
                    <Col xs={3}>
                      <Form.Control placeholder='Año' />
                    </Col>
                    <Col xs={4}>
                      <Form.Control placeholder='Código de seguridad' />
                    </Col>
                  </Form.Row>
                </Form>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <WhiteContainer>
            <Form>
              <fieldset>
                <Form.Group as={Row}>
                  <Col sm={10}>
                    <Form.Check
                      type='radio'
                      name='formHorizontalRadios'
                      label='Oxxo'
                      id='formHorizontalRadios1'
                      className='uppercase'
                    />
                    <div className='container-pay-cards'>
                      <img src={Oxxo} alt='Oxxo img' className='img-card'></img>
                    </div>
                  </Col>
                </Form.Group>
              </fieldset>
            </Form>
          </WhiteContainer>
          <WhiteContainer>
            <Form>
              <fieldset>
                <Form.Group as={Row}>
                  <Col sm={10}>
                    <Form.Check
                      type='radio'
                      name='formHorizontalRadios'
                      label='Paypal'
                      id='formHorizontalRadios1'
                      className='uppercase'
                    />
                    <div className='container-pay-cards'>
                      <img src={Paypal} alt='Oxxo img' className='img-card'></img>
                    </div>
                  </Col>
                </Form.Group>
              </fieldset>
            </Form>
          </WhiteContainer>
        </div>
        <div className='shipping-container divider-container'>
          <p className='weight-medium-font'>Envíos:</p>
          <Form>
            <Form.Check type='radio' aria-label='radio 1' label='Nacional económico $100MXN' />
            <Form.Check type='radio' aria-label='radio 1' label='Nacional estándar $130MXN' />
            <Form.Check type='radio' aria-label='radio 1' label='Nacional ecoexpress $165MXN' />
            <Form.Check
              type='radio'
              aria-label='radio 1'
              label='Nacional correos de méxico $60MXN'
            />
          </Form>
        </div>
        <div className='divider-container'>
          <p className='weight-medium-font'>Resumen de compra</p>
          <WhiteContainer className='shopping-view-checkout'>
            <CardItem imagenProducto={Camisa1} nombreCamisa='Camisa 1' />
            <br></br>
            <b>1 x Camisa1</b>
            <p className='small-gray-font'>
              Descripción del playstation va aqui xd sirve pa jugar <br></br>
              <b>$1251730</b>
            </p>
            <hr></hr>
            <p className='right'>Sub total: $1574</p>
            <hr></hr>
            <p className='right'>Total: $1574</p>
          </WhiteContainer>
        </div>

        <Button variant='info' type='button'>
          Finalizar compra
        </Button>
      </GridContainer>
    </CheckoutContainer>
  );
}

export default Checkout;
