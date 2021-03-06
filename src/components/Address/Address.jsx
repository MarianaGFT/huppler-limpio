import React,{useContext,useEffect,useState} from "react";
import styled from "styled-components";
import { Form, Col, Button } from "react-bootstrap";
import BackgroundSpaceImg7 from "../../assets/background-space7.png";
import {Redirect} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import {usuarioContext} from '../../context/Usuarios/UsuariosState'
import Swal from "sweetalert2";

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
  .form-control{
    height:35px;
    font-size:15px;
    text-decoration:underline  black  ;
    border:none;
    color:black 
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
  padding: 20px;
  width: 80%;

  button {
    margin: 0 10px;
  }
`;

function Address({history,location}) {
  const {agregarDireccion,success,loading,token}=useContext(usuarioContext)
  const decode=jwt_decode(token)
  const [datos,setDatos]=useState({
    nombre:'',
    apellidos:'',
    telefono:'',
    estado:'',
    municipio:'',
    cp:'',
    colonia:'',
    calle:'',
    noExterior:'',
    noInterior:'',
    referencia:''
  })
  const{nombre,apellidos,telefono,municipio,calle,colonia,cp,noExterior,noInterior,referencia,estado}=datos
  const onChangeHandler=(e)=>{
    setDatos({
      ...datos,
      [e.target.name]:e.target.value
    })
  }
  const redirect=location.search ? location.search.split('=')[1]: '/'
  const submitHandler=async(e)=>{
    e.preventDefault();
    console.log(datos)
    await agregarDireccion({
      id:decode.user.id,
      datos
    })
  
      await Swal.fire(
          'Registrado',
          'Tu dirección ha sido Registrada',
          'success'
       )
      history.push(redirect)
    
  }
 
  return (
    <AddressContainer>
      <p>Agregar un domicilio</p>
      <WhiteContainer>
        
        <Form onSubmit={submitHandler}>
          
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Control type='text' placeholder='Nombre'
              name="nombre"
              value={nombre}
              onChange={onChangeHandler}
              required/>
            </Form.Group>
            
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Apellido</Form.Label>
              <Form.Control type='text' placeholder='Apellido' 
               name="apellidos"
               value={apellidos}
               onChange={onChangeHandler}
               required/>
            </Form.Group>
          

          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type='number' placeholder='Ingresa teléfono'
             name="telefono"
             value={telefono}
             onChange={onChangeHandler} 
             required/>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Calle</Form.Label>
              <Form.Control type='text' placeholder='Calle'
               name="calle"
               value={calle}
               onChange={onChangeHandler} 
               required/>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Colonia</Form.Label>
              <Form.Control type='text' placeholder='Colonia'
               name="colonia"
               value={colonia}
               onChange={onChangeHandler}
               required />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>N° Exterior</Form.Label>
              <Form.Control type='text' placeholder='N° Exterior'
               name="noExterior"
               value={noExterior}
               onChange={onChangeHandler}
               required />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>N° Interior</Form.Label>
              <Form.Control type='email' placeholder='N° Interior (opcional)'
              name="noInterior"
              value={noInterior}
              onChange={onChangeHandler} />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Indicaciones generales para entregar tus compras</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Descripción de la fachada, puntos de referencia para encontrarla, indicaciones de seguridad, etc'
              name="referencia"
              value={referencia}
              onChange={onChangeHandler} 
              required
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>Municipio</Form.Label>
              <Form.Control 
              name="municipio"
              value={municipio}
              onChange={onChangeHandler} 
              required/>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Estado</Form.Label>
              <Form.Control 
              name="estado"
              value={estado}
              onChange={onChangeHandler}
              required >
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Código postal</Form.Label>
              <Form.Control 
              name="cp"
              value={cp}
              onChange={onChangeHandler} 
              required
              />
            </Form.Group>
          </Form.Row>
          <Button variant='outline-primary' onClick={()=>history.push('/adress')}>
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
