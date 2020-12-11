import React, { useState } from "react";
import styled from "styled-components";
import { Button, Modal } from "react-bootstrap";
import BackgroundSpaceImg7 from "../../assets/background-space7.png";
import Edit from "../../assets/icon/edit.svg";
import Delete from "../../assets/icon/delete.svg";
import Add from "../../assets/icon/add.svg";

const AddressViewContainer = styled.div`
  background-image: url(${BackgroundSpaceImg7});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 3rem 0.8rem;

  p {
    /* position: relative; */
    /* right: 35px; */
    color: #fff;
    font-size: 1.7rem;
    text-align: left;
    margin-left: 0.8rem;
    padding-top: 14px;
    /* padding-left: 0.5rem; */
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    p {
      margin-left: 1.5rem;
    }
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
  height: 24rem;
  margin: 0.5rem auto;
  padding: 0.5rem;
  width: 95%;
  text-align: left;

  /*Dividir el contenedor para direccion y botones al lado */
  .address-grid {
    display: grid;
    grid-template-columns: 85% 15%;
  }

  /*botones chiquitos */
  .btn {
    padding: 0 0.75rem;
    margin: 0.2rem 0;
  }

  /*Texto pequeño dirección */
  .address-info-text {
    color: #000;
    font-size: 0.75rem;
    /* text-align: left; */
    margin-left: 0.8rem;
  }

  div {
    display: -webkit-inline-box;
    align-items: center;
  }

  img {
    width: 0.8rem;
  }

  .add-address-text {
    color: #277bdd;
    font-size: 0.8rem;
    margin: 0 1rem;
  }

  /*Texto negritas modal */
  .modal-body {
    font-weight: 600;
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    width: 80%;

    input {
      margin: 0 0.7rem;
    }

    button {
      width: 3rem;
    }

    .address-info-text {
      margin-left: 1.2rem;
    }

    .add-icon {
      margin: 0 1.2rem;
    }

    img {
      width: 1.3rem;
    }

    button {
      height: 2rem;
    }
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    width: 40rem;
  }
`;

function AddressView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <AddressViewContainer>
      <p className='address-title'>Elige dónde recibir tus compras</p>
      <WhiteContainer>
        <div className='address-grid'>
          <div className='container-information-address'>
            <input type='radio' id='male' name='gender' value='male'></input>
            <p className='address-info-text'>
              <b>Juan Pablo Cabellos Aguilar</b>
              <br></br>312-132-6630<br></br>Juárez #221<br></br>Coquimatlán, Colima, México
            </p>
          </div>
          <div>
            <Button variant='primary'>
              <img src={Edit} alt='Edit icon'></img>
            </Button>
            <Button variant='danger' onClick={handleShow}>
              <img src={Delete} alt='Delete icon'></img>
            </Button>
          </div>
        </div>
        <hr></hr>
        <div>
          <img src={Add} alt='Add icon' className='add-icon'></img>
          <a href='#' className='add-address-text'>
            Agregar dirección
          </a>
        </div>
      </WhiteContainer>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Estás seguro de eliminar esta ubicación?</Modal.Body>
        <Modal.Footer>
          <Button variant='soutline-primary' onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant='danger' onClick={handleClose}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </AddressViewContainer>
  );
}

export default AddressView;
