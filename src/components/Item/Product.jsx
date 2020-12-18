import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Button, Modal, Form, ToggleButtonGroup, ToggleButton,ButtonGroup } from "react-bootstrap";
import BackgroundSpaceImg5 from "../../assets/background-space5.jpg";
import CardItem from "../CardItem";
import Add from "../../assets/icon/add.png";
import CamisaCore from "../../assets/clothes/Core.png";
import Camisa1 from "../../assets/camisa1.png";
import Ex1 from "../../assets/shirts/ex1.png";
import Ex2 from "../../assets/shirts/ex2.png";
import Ex3 from "../../assets/shirts/ex3.png";
import GuiaTallas from "../../assets/tallas-guia.png";
import Back from "../../assets/icon/back.svg";
import { Link } from "react-router-dom";
import useApi from '../../services/api'
import constants from '../../constants/apiEndPoint'
import {productosContext} from '../../context/Producto/ProductoState'
import Loader from '../Loader/Loader'
import {carritoContext} from '../../context/Carrito/CarritoState'
const imageSrc = constants.apiEndPoint + "/public/img/";

const ShoppingViewContainer = styled.div`
  background-image: url(${BackgroundSpaceImg5});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: auto;
  color: #fff;
  padding-top:100px;
  font-size: 28px;
 

  .btn-info {
    color: #fff;
    background-color: #059584;
    border-color: #059584;
  }
  .back-icon-user-config {
    width: 2rem;
    margin-left:0;
  }
  .form-control{
    padding:25px;
    margin:0 auto;
    color:black;
  }

  .shopping-view-grid {
    background-color: rgba(19, 19, 19, 0.12);
    grid-gap: 20px;
    display: grid;
    /* grid-column-gap: 30px; */
    grid-template-columns: repeat(1, 50%);
    justify-content: center;
    height: auto;
  }

  .inf-container {
    text-align: -webkit-left;
    margin-left: 200px;
  }

  /* RADIOBUTTON ELEGIR TALLA */
  .btn-primary:not(:disabled):not(.disabled).active,
  .btn-primary:not(:disabled):not(.disabled):active,
  .show > .btn-primary.dropdown-toggle {
    width: 30px !important;
    height: 30px !important;
    margin: 0 5px;
    padding: 5px 5px;
    background-color: #c4c4c4;
    border-radius: 10px !important;
    color: #000;
    font-weight: 600;
    margin-left: 0px !important;
  }

  .btn-primary {
    width: 30px !important;
    height: 30px !important;
    margin: 0 5px;
    padding: 5px 5px;
    background-color: #c4c4c4;
    border-radius: 10px !important;
    color: #000;
    font-weight: 600;
  }
  .btn-cohete {
    margin-bottom: 10px;
  }

  /*BOTON MODAL TALLAS*/
  .btn-light {
    color: #fff;
    background-color: transparent;
    border-color: transparent;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }

  .grid-size-amount {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
    text-align: center;

    .shopping-view-grid {
      grid-template-columns: 15% 35% 40%;
      grid-gap: 0px;
      margin-bottom: 20px;
    }

    .ex-tshirt-container img {
      width: 50px;
      margin: 3px 0px;
    }

    .gtKOzX span {
      height: 180px;
    }

    h3 {
      font-size: 20px;
    }

    p {
      margin-bottom: 0.5rem;
    }

    /*Sizes*/
    .sizes {
      width: 140px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    /* .sizes button {
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 10px;
      border-style: none;
      background-color: #c4c4c4;
      font-weight: 700;
      opacity: 0.6;
    } */

    .btn-primary {
      width: 142px;
      height: 34px;
      font-size: 13px;
    }
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    .shopping-view-grid {
      grid-template-columns: 10% 30% 32%;
      grid-gap: 10px;
    }

    .ex-tshirt-container img {
      width: 50px;
      margin: 3px 0px;
    }

    /*Sizes*/
    .sizes {
      width: 140px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .sizes button {
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 10px;
      border-style: none;
      background-color: #c4c4c4;
      font-weight: 700;
      opacity: 0.6;
    }
  }

  /************ 668 ************/
  @media screen and (min-width: 668px) {
    height: auto;

    .shopping-view-grid {
      grid-template-columns: 10% 25% 50%;
      grid-gap: 12px;
      padding-top: 20px;
      /* grid-column-gap: 25px;
      height: auto; */
    }

    .ex-tshirt-container {
      text-align: center;
    }
    .ex-tshirt-container img {
      width: 55px;
      margin-bottom: 10px;
    }

    /*Card img*/
    .gtKOzX span {
      width: 170px;
      height: 215px;
    }

    .gtKOzX span img {
      padding-top: 15px;
      width: 173px;
    }

    .gtKOzX span h3 {
      margin-top: 0px;
    }

    /*text*/
    h3 {
      margin-bottom: 0px;
    }

    .description-product {
      font-size: 13px;
      margin: 0;
    }

    .price {
      font-weight: 550;
      font-size: 30px;
      margin-bottom: 2px;
    }

    /*Sizes*/
    .sizes {
      width: 140px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .sizes button {
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 10px;
      border-style: none;
      background-color: #c4c4c4;
      font-weight: 700;
      opacity: 0.6;
    }

    /*button size*/
    .btn-primary {
      width: 180px;
    }

    /*BOTÓN CANTIDAD UNIDADES */
    .grid-size-amount {
      width: 50%;
    }

    /************ 1024 ************/
    @media screen and (min-width: 1024px) {
      .shopping-view-grid {
        grid-template-columns: 5% 15% 50%;
        grid-gap: 0px;
      }
      .gtKOzX span img {
        padding-top: 0px !important;
      }

      /*BOTÓN CANTIDAD UNIDADES */
      .grid-size-amount {
        width: 28%;
      }
    }
  }
`;

function Product({match,history}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, setValue] = useState([1, 3]);
  const handleChange = (val) => setValue(val);
  const {producto,obtenerProducto,success,loading}=useContext(productosContext)
  const[productoEnviar,setProductoAenviar]=useState({})
  const[variant,setVariant]=useState(0)
  const [cantidad,setCantidad]=useState(0)
  const[stock,setStock]=useState([])

  const {success:successCarro,carritoId,crearCarrrito, agregarItem}=useContext(carritoContext)
  useEffect(() => {
    const id=match.params.id
    console.log(id)
    obtenerProducto(id) 
  }, [success])

  const agregarCarro=async (e)=>{
    e.preventDefault()
    if(cantidad<=0){
      console.log('nmms no se puede')
      return
    }
    await agregarItem({
      productoId:producto.id,
      varianteId:parseInt(variant),
      cantidad:parseInt(cantidad)
    })
    
      if(successCarro){
        history.push(`/cohete-de-compra`)
      }
    
  }
  
  const comprarDirecto=e=>{
    e.preventDefault()
    setProductoAenviar({
      productoId:producto.id,
      varianteId:1,
      cantidad:cantidad
    })
    if(cantidad<=0){
      console.log('nmms no se puede')
      return
    }
    if(!carritoId){
      crearCarrrito()
    }
    agregarItem(productoEnviar)
    if(successCarro){
      history.push('/cohete-de-compra')
    }
    
  }
  const variantHandler=e=>{
    setVariant(e.target.value)
    setStock(producto.variantes.filter(variante=>variante.id==e.target.value))
    if(e.target.value!==variant){
      setCantidad(0)
    }
   
  }
  return (
    <>
     {loading ?(<Loader/>):(
    <ShoppingViewContainer>
    <Link to='/'>
        <img src={Back} alt='back icon' className='back-icon-user-config'></img>
      </Link>
      <div className='shopping-view-grid'>
        <div className='ex-tshirt-container'>
          <img src={Ex1} alt='Example 1'></img>
          <img src={Ex2} alt='Example 1'></img>
          <img src={Ex3} alt='Example 1'></img>
        </div>
        <CardItem imagenProducto={producto.imagenes.length>0
          ? imageSrc + producto.imagenes[0].nombreImagen
          : CamisaCore} nombreCamisa={producto.nombre} />
        <div className='inf-container'>
          <h2>{producto.nombre}</h2>
          <p className='description-product'>{producto.descripcion}</p>
          <p className='price'>$ {producto.precio} MXN</p>
          <p className='talla'>Talla:</p>
          <div className='sizes'>
            <ButtonGroup type='checkbox' >
            {producto.variantes.length>0 ? producto.variantes.map((variante)=>
              <Button value={variante.id} onClick={variantHandler}
              disabled={variante.stock>0?false:true} >{variante.talla}</Button>):
              <p className='description-product'>Sin Tallas disponibles :C</p> }
            </ButtonGroup>
            {/* <button>CH</button>
            <button>M</button>
            <button>G</button>
            <button>EG</button> */}
          </div>
          <Button variant='light' onClick={handleShow}>
            GUÍA DE TALLAS
          </Button>
          
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Guía de tallas</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={GuiaTallas} alt='Guía de tallas' className='guia-tallas'></img>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <div className='grid-size-amount'>
            <p>Cantidad:{cantidad} </p>
            <Form>
              <Form.Group controlId='exampleForm.ControlSelect1'>
                <Form.Control as='select' value={cantidad}  onChange={(e)=>setCantidad(e.target.value)} >
                {stock.length>0 && [...Array(stock[0].stock ).keys()].map((x)=>(
                  <option key={x+1} value={x+1}>{x+1}</option>
                                    ))}
                </Form.Control>
              </Form.Group>
            </Form>
            <p>unidades</p>
          </div>
         
          {/*productos ? (
            <Button variant='info' type='button' onClick={() => seleccionarProducto(id)}>
              Añadir al cohete
            </Button>
          ) : (
            <Button variant='danger' type='button' onClick={() => eliminarProducto(id)}>
              Eliminar
            </Button>
          )*/}
          <div className="btn-cohete">
          <Button variant='info' type='button' onClick={agregarCarro}>
              Añadir al cohete
            </Button>
            </div>

            <Button variant='info' type='button' onClick={comprarDirecto}>
              Comprar Ahora
            </Button>
          </div>
        </div>
      
    </ShoppingViewContainer>
    )}
    </>
  );
}

export default Product;
