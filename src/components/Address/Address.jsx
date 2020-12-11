import React from "react";
import styled from "styled-components";
import { Form, Col, Button } from "react-bootstrap";
import BackgroundSpaceImg7 from "../../assets/background-space7.png";

const AddressContainer = styled.div`
  background-image: url(${BackgroundSpaceImg7});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: auto;
  text-align: center;
  padding: 3rem 0;

  p {
    /* position: relative; */
    /* right: 35px; */
    color: #fff;
    font-size: 1.7rem;
    text-align: left;
    margin: 0 2rem;
    padding-left: 0.5rem;
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    p {
      margin: 0 9rem;
    }
  }
`;

const WhiteContainer = styled.div`
  border-radius: 10px;
  background-color: #f9f6f6;
  height: auto;
  margin: 20px auto;
  padding: 10px;
  width: 80%;

  button {
    margin: 0 10px;
  }
`;

function Address() {
  return (
    <AddressContainer>
      <p>Agregar un domicilio</p>
      <WhiteContainer>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type='email' placeholder='Nombre' />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Apellido</Form.Label>
              <Form.Control type='email' placeholder='Apellido' />
            </Form.Group>
          </Form.Row>

          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type='email' placeholder='Ingresa teléfono' />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Calle</Form.Label>
              <Form.Control type='email' placeholder='Calle' />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Colonia</Form.Label>
              <Form.Control type='email' placeholder='Colonia' />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>N° Exterior</Form.Label>
              <Form.Control type='email' placeholder='N° Exterior' />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>N° Interior</Form.Label>
              <Form.Control type='email' placeholder='N° Interior (opcional)' />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type='email' placeholder='Ingresa correo electrónico' />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
          </Form.Row>

          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type='email' placeholder='Ingresa correo electrónico' />
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Indicaciones generales para entregar tus compras</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Descripción de la fachada, puntos de referencia para encontrarla, indicaciones de seguridad, etc'
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>Ciudad</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Estado</Form.Label>
              <Form.Control as='select' defaultValue='Choose...'>
                <option>Elige...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Código postal</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
          <Button variant='outline-primary' type='submit'>
            Cancelar
          </Button>
          <Button variant='primary' type='submit'>
            Guardar
          </Button>
        </Form>
      </WhiteContainer>
    </AddressContainer>
  );
}

export default Address;
